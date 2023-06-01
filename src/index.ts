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
        created_at: String(new Date),
        isAdmin: false
      },
    });

    console.log("Usuário criado:", user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
