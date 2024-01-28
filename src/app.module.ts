import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationGateway } from './websockets/location.gateway';
import { PrismaService } from './service/prisma/prisma.service';
import { LocationController } from './controller/location/location.controller';
import { LocationService } from './service/location/location.service';
import { UpdateLocationController } from './controller/location/update-location.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    LocationController,
    UpdateLocationController
  ],
  providers: [
    AppService,
    LocationGateway,
    PrismaService,
    LocationService
  ],
})
export class AppModule { }
