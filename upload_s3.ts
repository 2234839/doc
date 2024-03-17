import * as Minio from 'minio';
import fs from "fs/promises"
const minioClient = new Minio.Client({
    endPoint: process.env.ENDPOINT!,
    port: 443,
    useSSL: true,
    accessKey: process.env.ACCESSKEY!,
    secretKey: process.env.SECRETKEY!,
})
const BucketName = "myjfs"

const localRepoPath = "./docs"
const remotePath = "app/docs"

const NotFound = Symbol("NotFound")

uploadDirToS3(remotePath,localRepoPath);

// 读取本地git仓库的内容并上传到S3存储桶（增量上传）
async function uploadDirToS3(s3Dir: string, localDir: string) {
    const files = await fs.readdir(localDir);

    for (const name of files) {
        const s3Path = `${s3Dir}/${name}`
        const localPath = `${localDir}/${name}`
        const fileStat = await fs.stat(localPath)
        if (fileStat.isDirectory()) {
            await uploadDirToS3(s3Path,localPath)
        } else {
            const objectStat = await (minioClient.statObject(BucketName, s3Path).catch((e: Error) => {
                if (e.message.includes("Not Found")) {
                    return NotFound
                }
            }))
            // 简单的认为文件大小不一致就不一样
            if (objectStat === undefined || objectStat === NotFound || objectStat.size !== fileStat.size) {
                minioClient.fPutObject(BucketName, s3Path, localPath, {}).then(r => {
                    console.log("upload：", s3Path, `${(fileStat.size / 1024).toFixed(0)}k`, r);
                })
            } else {
                console.log("跳过", s3Path);
            }
        }
    }
};