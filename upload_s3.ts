import * as Minio from 'minio';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.ACCESSKEY);

const minioClient = new Minio.Client({
  endPoint: process.env.ENDPOINT! || 's3.shenzilong.cn',
  port: 443,
  useSSL: true,
  accessKey: process.env.ACCESSKEY!,
  secretKey: process.env.SECRETKEY!,
});
const BucketName = 'myjfs';

const localRepoPath = './docs';
const remotePath = 'app/docs';

const NotFound = Symbol('NotFound');

uploadDirToS3(remotePath, localRepoPath);

// 读取本地git仓库的内容并上传到S3存储桶（增量上传）
async function uploadDirToS3(s3Dir: string, localDir: string) {
  const files = await fs.readdir(localDir);

  // 使用 Promise.all 并发处理文件上传
  await Promise.all(files.map(async (name) => {
    const s3Path = `${s3Dir}/${name}`;
    const localPath = `${localDir}/${name}`;
    const fileStat = await fs.stat(localPath);

    if (fileStat.isDirectory()) {
      await uploadDirToS3(s3Path, localPath);
    } else {
      await retryUpload(s3Path, localPath, fileStat.size);
    }
  }));
}

// 重试上传任务，最多重试10次
async function retryUpload(s3Path: string, localPath: string, fileSize: number) {
  const maxRetries = 10;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const objectStat = await minioClient.statObject(BucketName, s3Path).catch((e: Error) => {
        if (e.message.includes('Not Found')) {
          return NotFound;
        }
        throw e;
      });

      // 简单的认为文件大小不一致就不一样
      if (
        objectStat === undefined ||
        objectStat === NotFound ||
        (objectStat as  Minio.BucketItemStat).size !== fileSize
      ) {
        await minioClient.fPutObject(BucketName, s3Path, localPath, {}).then((r) => {
          console.log('upload：', s3Path, `${(fileSize / 1024).toFixed(0)}k`, r);
        });
      } else {
        console.log('跳过', s3Path);
      }
      break; // 上传成功，跳出循环
    } catch (error) {
      retryCount++;
      console.error(`上传失败，重试次数：${retryCount}`, error);
      if (retryCount >= maxRetries) {
        console.error(`上传失败，已达到最大重试次数：${maxRetries}`, error);
        throw error; // 达到最大重试次数，抛出错误
      }
    }
  }
}