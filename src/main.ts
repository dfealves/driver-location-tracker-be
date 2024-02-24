import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as fs from 'fs';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

async function bootstrap() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const keyPath = './key.pem';
  const certPath = './cert.pem';
  
  const key = fs.readFileSync(keyPath);
  const cert = fs.readFileSync(certPath)

  const httpsOptions = {
    key: key,
    cert: cert,
  };
  
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: ['*' ,'https://e198-2804-14d-7e3d-8dce-d49c-4ac2-27c4-4e30.ngrok-free.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));  

  await app.listen(3000);


}
bootstrap();
