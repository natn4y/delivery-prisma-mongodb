import { Request, Response } from 'express';
import { CreateDeliveriesUseCase } from './CreateDeliveriesUseCase';

class CreateDeliveriesController {
  async handle(request: Request, response: Response) {
    const { item_name, id_client, end_at, id_deliveryman } = request.body;

    try {
      const createDeliveryUseCase = new CreateDeliveriesUseCase()

      await createDeliveryUseCase.execute({
        id_client,
        item_name,
        end_at,
        id_deliveryman
      });

      return response.status(200).json({ message: 'delivery created' });

    } catch (error) {
      console.log('Erro ao criar delivery');
      return response.status(400).json({ error: 'Erro ao criar delivery' });
    }

  }
}

export { CreateDeliveriesController }