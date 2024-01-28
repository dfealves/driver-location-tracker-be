import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as fs from 'fs';

async function bootstrap() {
  // const keyPath = './key.pem';
  // const certPath = './cert.pem';
  
  // const key = fs.readFileSync(keyPath);
  // const cert = fs.readFileSync(certPath)

  // const httpsOptions = {
  //   key: key,
  //   cert: cert,
  // };
  
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  }));  

  await app.listen(3000, '192.168.0.8');

}
bootstrap();
