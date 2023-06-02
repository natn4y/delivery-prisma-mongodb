import { prisma } from '../../../../database/prismaClient';

interface ICreateDelivery {
  item_name: string;
  id_client: string;
  id_deliveryman: string;
  end_at: string;
}


class CreateDeliveriesUseCase {
  async execute({ id_client, item_name, end_at, id_deliveryman }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
        create_at: new Date().toISOString(),
        end_at ,
        id_deliveryman,
      }
    });
    return delivery
  }
}

export { CreateDeliveriesUseCase }