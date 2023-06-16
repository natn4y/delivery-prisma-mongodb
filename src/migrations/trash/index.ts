import { prisma } from '../../database/prismaClient';

async function createUser() {
  try {
    await prisma.clients.create({
      data: {
        username: "john",
        password: "123",
        created_at: new Date().toISOString(),
        isAdmin: false
      }
    })

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username: "deliveryman",
        password: "123456",
        created_at: new Date().toISOString(),
        isAdmin: false
      },
    })

    await prisma.deliveries.create({
      data: {
        id_client: null,
        id_deliveryman: null,
        item_name: 'Vatapá c/ pimenta',
        create_at: '2023-06-01T05:11:54.447Z',
        end_at: null
      }
    })

    console.log("Deliveryman criado:", deliveryman);

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
