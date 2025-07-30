import * as Minio from 'minio';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

// 阿里云OSS配置 - MinIO客户端兼容阿里云OSS
const minioClient = new Minio.Client({
  endPoint: process.env.ENDPOINT! || 'oss-cn-hangzhou.aliyuncs.com',
  port: 443,
  useSSL: true,
  accessKey: process.env.ACCESSKEY!,
  secretKey: process.env.SECRETKEY!,
  region: 'oss-cn-hangzhou',
  pathStyle: false, // 阿里云OSS使用虚拟主机样式访问
});

const BucketName = 'store-llej';
const localRepoPath = './docs';
const remotePath = 'apps/docs/docs';
const hashFilePath = './file_hashes.json';

// 文件哈希和修改时间记录
interface FileRecord {
  hash: string;
  mtime: number;
}

let fileRecords = {} as Record<string, FileRecord>;

// 初始化或读取文件记录
async function initFileRecords(): Promise<Record<string, FileRecord>> {
  try {
    const data = await fs.readFile(hashFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // 如果文件不存在，返回空对象
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

// 计算文件的哈希值
async function calculateFileHash(filePath: string): Promise<string> {
  const fileBuffer = await fs.readFile(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

// 保存文件记录到文件
async function saveFileRecords(records: Record<string, FileRecord>) {
  await fs.writeFile(hashFilePath, JSON.stringify(records, null, 2));
}

async function main() {
  fileRecords = await initFileRecords();
  try {
    await uploadDirToS3(remotePath, localRepoPath);
  } catch (error) {
    console.error('Error uploading repository:', error);
  } finally {
    await saveFileRecords(fileRecords); // 保存更新后的文件记录
  }
}
main();
// 读取本地git仓库的内容并上传到S3存储桶（增量上传）
async function uploadDirToS3(s3Dir: string, localDir: string) {
  const files = await fs.readdir(localDir);

  for await (const name of files) {
    const s3Path = `${s3Dir}/${name}`;
    const localPath = `${localDir}/${name}`;
    const fileStat = await fs.stat(localPath);

    if (fileStat.isDirectory()) {
      await uploadDirToS3(s3Path, localPath);
    } else {
      const currentMtime = fileStat.mtimeMs;
      const oldRecord = fileRecords[localPath];

      // 如果文件不存在记录或修改时间不同，才需要进一步检查
      if (!oldRecord || oldRecord.mtime !== currentMtime) {
        const fileHash = await calculateFileHash(localPath);

        // 如果哈希值也不同，才需要上传
        if (!oldRecord || oldRecord.hash !== fileHash) {
          await retryUpload(s3Path, localPath, fileStat.size);
          fileRecords[localPath] = { hash: fileHash, mtime: currentMtime }; // 更新记录
        } else {
          // 只有修改时间不同但哈希值相同（可能是属性变化），更新记录但不上传
          fileRecords[localPath] = { hash: fileHash, mtime: currentMtime };
        }
      } else {
        // console.log('跳过（修改时间相同）:', s3Path);
      }
    }
  }
}

// 重试上传任务，最多重试10次
async function retryUpload(s3Path: string, localPath: string, fileSize: number) {
  const maxRetries = 10;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      // 阿里云OSS上传配置
      const uploadOptions = {
        'Content-Type': getContentType(localPath),
        'Cache-Control': 'max-age=3600',
      };

      await minioClient.fPutObject(BucketName, s3Path, localPath, uploadOptions);
      console.log('上传成功:', s3Path, `${(fileSize / 1024).toFixed(0)}k`);
      break; // 上传成功，跳出循环
    } catch (error) {
      retryCount++;
      console.log('[error]', error);
      console.error(`上传失败，重试次数：${retryCount}`, localPath);

      // 阿里云OSS特定错误处理
      if (retryCount >= maxRetries) {
        console.error(`上传失败，已达到最大重试次数：${maxRetries}`, localPath);
        console.error('错误详情:', error);
        throw error;
      }

      // 等待一段时间后重试
      await new Promise((resolve) => setTimeout(resolve, 1000 * retryCount));
    }
  }
}

// 根据文件扩展名获取Content-Type
function getContentType(filePath: string): string {
  const ext = filePath.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'html':
      return 'text/html; charset=utf-8';
    case 'css':
      return 'text/css; charset=utf-8';
    case 'js':
      return 'application/javascript; charset=utf-8';
    case 'json':
      return 'application/json; charset=utf-8';
    case 'xml':
      return 'application/xml; charset=utf-8';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'svg':
      return 'image/svg+xml';
    case 'pdf':
      return 'application/pdf';
    default:
      return 'application/octet-stream';
  }
}
