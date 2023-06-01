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
      console.log('Conectado à database!');
    } catch (error) {
      console.log(error);
    }

    // Validar se o usuário existe

    // Criptografar a senha

    // Salvar o client

    // Lógica de criação do cliente aqui
  }
}

// Test
const createClientUseCase = new CreateClientUseCase();

const username = 'john.doe';
const password = '123';

createClientUseCase.execute({ username, password })
  .then(() => {
    console.log('Cliente criado com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar cliente:', error);
  });