import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LocationService {
    constructor(private readonly prisma: PrismaService) { }

    async createLocation(latitude: number, longitude: number, userId: string) {
        console.log('entrei no componente de POST')
        return this.prisma.prisma.location.create({
            data: { latitude, longitude, userId }
        })
    };

    async getAllLocations() {
        return this.prisma.prisma.location.findMany();
    }
}