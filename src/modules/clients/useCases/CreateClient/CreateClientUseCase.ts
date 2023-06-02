import { hash } from 'bcrypt'
import { prisma } from '../../../../database/prismaClient';

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
        created_at: new Date().toISOString(),
        isAdmin: false,
      }
    })

    return client;
  }
}

export { CreateClientUseCase }