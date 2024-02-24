import { Injectable, UnauthorizedException } from "@nestjs/common";
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
       try {
        const user = await this.userService.findyByUsername(username);
        if (user) {
            const isPasswordValid = await compare(password, user.password);
            if (isPasswordValid) {
                const { password, ...result } = user;
                return result;
            }
        }
       } catch (error) {
            console.log('Erro durante a validação do usuário: ', error.message)
            throw new UnauthorizedException('Erro durante a autenticação do usuário')
       }

         // Se as credenciais não forem válidas, lançar uma exceção não autorizada
         throw new UnauthorizedException('Credenciais inválidas');
    }

    async login(user: any): Promise<any> {
        const payload = { username: user.username, id: user.id, type: user.type };
        
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken
        }
    }
}