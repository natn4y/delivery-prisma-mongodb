import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

class CreateDeliverymanController {
  async handle(request: Request, response: Response) {

  // Instancia a class
    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    // Recupera informações do corpo da requisição
    const { username, password } = request.body;

    try {
      // Chama o método execute da classe instanciada passando as informações
      await createDeliverymanUseCase.execute({ username, password });

      console.log('deliveryman cadastrado com sucesso!');
      return response.status(200).json({ message: 'deliveryman criado com sucesso!' });
    } catch (error) {
      console.log('Erro ao cadastrar deliveryman:', error);
      return response.status(409).json({ error: 'deliveryman already exists' });
    }
  }
}

export { CreateDeliverymanController };
