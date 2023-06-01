import { PrismaClient } from '@prisma/client';

import { hash } from 'bcrypt'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mongodb://localhost:27018/delivery-node?directConnection=true",
    },
  },
});

interface ICreateClient {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    // Testar conexão com o banco de dados
    try {
      await prisma.$connect();
      console.log('\nCONNECTED TO DATABASE!\n');
    } catch (error) {
      console.log(error);
    }

    // Validar se o usuário existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return client;

    // Lógica de criação do cliente aqui
  }
}

export { CreateClientUseCase }