import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const userExists = await prisma.clients.findFirst({
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

    const user = await prisma.clients.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return user;
  }
}
