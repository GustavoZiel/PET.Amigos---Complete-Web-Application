import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';
import 'dotenv/config';

const accessKeyId = process.env["ACCESS_KEY"];
const secretAccessKey = process.env["SECRET_KEY"];
console.log(accessKeyId);
const s3 = new S3Client({
    endpoint: "http://127.0.0.1:9000",
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
    region: "us-east-1",
    sslEnabled: false,
    s3ForcePathStyle: true,
});

const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        bucket: "imagens-site",
        acl: "public-read",
        key: function (request, arquivo, cb) {
            cb(null, Date.now() + "-" + arquivo.originalname);
        },
    }),
});

const minioUrl = "127.0.0.1:9000/";
const bucket = "imagens-site/";
async function getFileUrl(fileName) {
    return minioUrl + bucket + fileName;
}

export default { uploadFile, getFileUrl };