import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '1897e7e0181f16b0cb2a6e09bbd1187ff2d72c5fb6c020c1f40032032a609d52',
            ignoreExpiration: false
        },
    )
    }

    async validate(payload: any): Promise<any> {
        console.log('entri no validate', payload)
        return { id: payload.sub, username: payload.username }
    }
}