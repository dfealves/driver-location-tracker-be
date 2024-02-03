import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationGateway } from './websockets/location.gateway';
import { PrismaService } from './service/prisma/prisma.service';
import { LocationController } from './controller/location/location.controller';
import { LocationService } from './service/location/location.service';
import { UpdateLocationController } from './controller/location/update-location.controller';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';
import { UserService } from './service/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './service/strategy/local.strategy';
import { JwtStrategy } from './service/strategy/jwt.strategy';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [
    AppController,
    LocationController,
    UpdateLocationController,
  ],
  providers: [
    AppService,
    LocationGateway,
    PrismaService,
    LocationService,
   
  ],
})
export class AppModule { }
