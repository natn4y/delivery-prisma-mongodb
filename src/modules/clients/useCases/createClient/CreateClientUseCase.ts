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

    // Validar se o client existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      },
    })

    if (clientExist) {
      throw new Error("Client already exists");
    }

    // Criptografar a senha

    // Salvar o client

    // Lógica de criação do cliente aqui
  }
}

// Instancia a class
const createClientUseCase = new CreateClientUseCase();

// Informações do body da requisição
const username = 'john.doe';
const password = '123';

// Chama o método execute da classe instanciada passando as informações
createClientUseCase.execute({ username, password })
  .then(() => {
    console.log('Cliente criado com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar cliente:', error);
  });