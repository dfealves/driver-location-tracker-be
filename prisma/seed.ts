// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function seed() {
//     const user = await prisma.user.create({
//         data: {
//             username: 'dfealves-driver',
//             email: 'daniloferreira.alves@gmail.com',
//             password: '*A77b89k',
//             type: 'DRIVER',
//         }
//     })

//     await prisma.location.create({
//         data: {
//             latitude: 40.7128,
//             longitude: -74.0060,
//             userId: user.id
//         }
//     });

//     const existingUser = await prisma.user.findUnique({
//         where: { username: 'dfealves' },
//     });

//     if (existingUser) {
//         // Se o usuário existir, obtenha o ID do usuário
//         const userId = existingUser.id;

//         // Crie a rota associada ao usuário
//         const route = await prisma.route.create({
//             data: {
//                 destination: 'Av. Brigadeiro Faria Lima, 3064 - Itaim Bibi, São Paulo - SP, 01451-001',
//                 userId: userId,
//             },
//         });

//         console.log('Rota criada para o usuário:', route);
//     } else {
//         console.log('Usuário não encontrado, seed ignorado.');
//     }

//     console.log('Seed concluído')
// }

// seed()
//     .catch((e) => {
//         console.log('error', e)
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })