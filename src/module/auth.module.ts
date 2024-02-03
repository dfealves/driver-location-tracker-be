import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "src/controller/auth/auth.controller";
import { LocalAuthGuard } from "src/guard/local-auth.guard";
import { AuthService } from "src/service/auth/auth.service";
import { PrismaService } from "src/service/prisma/prisma.service";
import { JwtStrategy } from "src/service/strategy/jwt.strategy";
import { LocalStrategy } from "src/service/strategy/local.strategy";
import { UserService } from "src/service/user/user.service";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'local' }),
        JwtModule.register({
            secret: '1897e7e0181f16b0cb2a6e09bbd1187ff2d72c5fb6c020c1f40032032a609d52',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        UserService,
        PrismaService,
        LocalAuthGuard
    ]
})
export class AuthModule { }