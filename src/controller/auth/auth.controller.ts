import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "src/guard/local-auth.guard";
import { AuthService } from "src/service/auth/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
}