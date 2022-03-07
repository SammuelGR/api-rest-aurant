import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryMan {
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({ password, username }: ICreateDeliveryMan) {
    const userExists = await prisma.deliveryMen.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    if (userExists) {
      throw new Error("Username already in use");
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.deliveryMen.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return user;
  }
}
