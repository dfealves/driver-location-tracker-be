import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
@Injectable()
export class LocationService {
    constructor(private readonly prisma: PrismaService) { }

    async createLocation(latitude: number, longitude: number, userId: string) {
        return this.prisma.prisma.location.create({
            data: { latitude, longitude, userId }
        })
    };

    async getAllLocations() {
        return this.prisma.prisma.location.findMany();
    }

    //serviço para atualizar localização do usuário
    async updateLocation(userId, latitude: number, longitude: number): Promise<void> {
        const { prisma } = this.prisma;
        const locationBeforeUpdate = await prisma.location.findUnique({
            where: { userId: userId },
        });

        await prisma.location.update({
            where: { userId: userId },
            data: {
                latitude,
                longitude,
                updatedAt: new Date(),
            },
        });
        const locationAfterUpdate = await prisma.location.findUnique({
            where: { userId: userId },
        });

        console.log('Localização Antes da Atualização:', locationBeforeUpdate);
        console.log('Localização Atualizada:', locationAfterUpdate);
    }
}