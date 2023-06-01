import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response) {

  // Instancia a class
  const createClientUseCase = new CreateClientUseCase();

  const { username, password } = request.body;

  // Chama o método execute da classe instanciada passando as informações
  console.log("", username, password);
  const result = await createClientUseCase.execute({ username, password })
    .then(() => {
      console.log('Cliente criado com sucesso!');
    })
    .catch((error) => {
      console.log('Erro ao criar cliente:', error);
    });

    return response.json(result);
  }
}

export { CreateClientController }