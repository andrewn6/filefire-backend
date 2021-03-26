import { S3 } from 'aws-sdk';
import { get } from 'config';

const s3 = new S3(get('aws'));

export const uploadFile = () => {
  
}

export const deleteFile = () => {

}

