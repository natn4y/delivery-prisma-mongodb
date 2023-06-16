import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mongodb://localhost:27020/delivery-node?directConnection=true",
    },
  },
});