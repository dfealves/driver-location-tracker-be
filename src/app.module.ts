import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationGateway } from './websockets/location.gateway';
import { PrismaService } from './service/prisma/prisma.service';
import { LocationController } from './controller/location/location.controller';
import { LocationService } from './service/location/location.service';
import { UpdateLocationController } from './controller/location/update-location.controller';
import { UserService } from './service/user/user.service';
import { AuthModule } from './module/auth.module';
import { RouteService } from './service/route/route.service';
import { RouteController } from './controller/route/route.controller';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [
    AppController,
    LocationController,
    UpdateLocationController,
    RouteController,
    UserController
  ],
  providers: [
    AppService,
    LocationGateway,
    PrismaService,
    LocationService,
    RouteService,
    UserService
  ],
})
export class AppModule { }
