import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findyByUsername(username);
        if (user) {
            const isPasswordValid = await compare(password, user.password);
            if (isPasswordValid) {
                const { password, ...result } = user;
                return result;
            }
        }

        return null;
    }

    async login(user: any): Promise<any> {
        const payload = { username: user.username, sub: user.id, type: user.type };
        console.log('payload', payload)
        const accessToken = this.jwtService.sign(payload);

        console.log('accessToken', accessToken)
        return {
            access_token: accessToken
        }
    }
}