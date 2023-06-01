import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
  username: string;
  password: string;
}


class CreateDeliverymanUseCase {
  async execute({ username, password  }: ICreateDeliveryman) {

    // Validar se o deliveryman existe
      const deliverymanExist = await prisma.deliveryman.findFirst({
        where: {
          username: {
            equals: username,
            mode: 'insensitive',
          },
        },
      });

      if (deliverymanExist) {
        throw new Error("deliveryman already exists");
      }

      // Criptografar a senha
      const hashPassword = await hash(password, 10);

      // Salvar o deliveryman
      const deliveryman = await prisma.deliveryman.create({
        data: {
          username,
          password: hashPassword,
          isAdmin: false,
          created_at: new Date().toISOString(),
        }
      })

      return deliveryman;
    }
  }


export { CreateDeliverymanUseCase };