import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInterface } from "src/interface/user.interface";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async createUser(username: string, email: string, password: string, type: string): Promise<any> {
        const { prisma } = this.prisma;
        try {
            const hashedPassword = await hash(password, 10);
            return prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                    type
                }
            })
        } catch (error) {
            if (error.code === 'P2002' || error.message.includes('Unique constraint failed on the constraint: `User_username_key`')) {
                throw new ConflictException('Nome de usuário já existe.')
            }
            throw error
        }
    }

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