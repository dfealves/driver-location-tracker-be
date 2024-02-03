import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        console.log('user', user)
        if (!user) {
            console.log('entrei no sem usuário')
            throw new UnauthorizedException();
        }
        console.log('passe do if', user)
        return user;
    }
}