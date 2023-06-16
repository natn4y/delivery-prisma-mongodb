// import { compare } from 'bcrypt';
// import { prisma } from '../../../../database/prismaClient';
// import { sign } from 'jsonwebtoken';

// interface IAuthenticateDeliveryman {
//   username: string;
//   password: string;
// }

// class AuthenticateDeliverymanUseCase {
//   // Receber Dados
//   async execute({ username, password }: IAuthenticateDeliveryman) {
//     // Verificar se username está cadastrado
//     const deliveryman = await prisma.deliveryman.findFirst({
//       where: { username }
//     })

//     if(!deliveryman) {
//       throw new Error("username or password invalid!");
//     }

//     // Verificar se a senha corresponde ao username
//     const passwordMatch = await compare(password , deliveryman.password)

//     if(!passwordMatch) {
//       throw new Error("username or password invalid!");
//     }

//     //Gerar token
//     const token = sign({
//       username
//     }, "96a284ffc8e6fc5e8ee7671f070bf88118", {
//       subject: deliveryman.id,
//       expiresIn: "1d"
//     });

//     return token;
//   }
// }

// export { AuthenticateDeliverymanUseCase }