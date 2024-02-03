import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInterface } from "src/interface/user.interface";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async findyByUsername(username: string): Promise<UserInterface> {
        const { prisma } = this.prisma;
        return prisma.user.findUnique({
            where: { username: username }
        })
    }

    async findById(id: string): Promise<UserInterface> {
        const { prisma } = this.prisma;
        return prisma.user.findUnique({
            where: { id: id }
        })
    }
}