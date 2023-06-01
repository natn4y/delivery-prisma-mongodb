const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mongodb://localhost:27018/delivery-node?directConnection=true",
    },
  },
});

async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Admin",
        email: "admin@admin.com",
        created_at: new Date().toISOString(),
        isAdmin: true
      },
    });

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username: "deliveryman",
        password: "123456",
      },
    })

    const deliveries = await prisma.deliveries.create({
      data: {
        id_client: '???',
        id_deliveryman: '???',
        item_name: 'Vatapá c/ pimenta',
        create_at: '2023-06-01T05:11:54.447Z',
        end_at: '2023-06-01T05:11:54.447Z'
      }
    })

    console.log("Usuário criado:", user);
    console.log("Deliveryman criado:", deliveryman);

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
