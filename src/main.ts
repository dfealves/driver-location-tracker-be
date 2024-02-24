import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as fs from 'fs';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: ['*' ,'https://e198-2804-14d-7e3d-8dce-d49c-4ac2-27c4-4e30.ngrok-free.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));  

  await app.listen(process.env.PORT ||3000);


}
bootstrap();
