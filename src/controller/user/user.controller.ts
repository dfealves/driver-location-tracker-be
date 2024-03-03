import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "src/service/user/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async createUser(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('type') type: string
    ): Promise<any> {
        const user = await this.userService.createUser(
            username,
            email,
            password,
            type
        );
        return { userId: user.id, message: 'Usuário criado com sucesso.'}
    }
}