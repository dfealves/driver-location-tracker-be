import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as fs from 'fs';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: ['*' ,'https://2b64-2804-14d-7e3d-8dce-9127-5f47-1575-f29d.ngrok-free.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));  

  await app.listen(process.env.PORT ||3000);


}
bootstrap();
