import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data: {
            username: 'dfealves',
            email: 'daniloferreira.alves@outlook.com',
            password: '*A77b89k',
            type: 'ADMIN',
        }
    })

    await prisma.location.create({
        data: {
            latitude: 40.7128,
            longitude: -74.0060,
            userId: user.id
        }
    });

    console.log('Seed concluído')
}

seed()
    .catch((e) => {
        console.log('error', e)
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect()
    })