import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RouteService {
    constructor(private readonly prisma: PrismaService) { }
    async getRoutesByUserId(userId: string): Promise<any[]> {
        const { prisma } = this.prisma;

        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: { routes: true }
            });

            if (!user) {
                throw new NotFoundException(`Usuário com o ID ${userId} não foi encontrado`)
            };

            return user.routes
        } catch (error) {
            throw new Error(`Erro ao obter as rotas para o usuário ${userId}: ${error.message}`)
        }
    }
}