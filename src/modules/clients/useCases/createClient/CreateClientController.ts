import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response) {

  // Instancia a class
    const createClientUseCase = new CreateClientUseCase();

    // Recupera informações do corpo da requisição
    const { username, password } = request.body;

    try {
      // Chama o método execute da classe instanciada passando as informações
      await createClientUseCase.execute({ username, password });

      console.log('Cliente cadastrado com sucesso!');
      return response.status(200).json({ message: 'Cliente criado com sucesso!' });
    } catch (error) {
      console.log('Erro ao cadastrar cliente');
      return response.status(409).json({ error: 'Client already exists' });
    }
  }
}

export { CreateClientController };
