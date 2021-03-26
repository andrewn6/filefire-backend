import { Client } from 'minio'
import { config } from 'dotenv'
config()
// connect to s3 bucket endpoint
const storage = new Client({
  
})