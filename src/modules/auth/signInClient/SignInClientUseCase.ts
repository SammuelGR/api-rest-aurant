import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import CONFIG from "../../../config/env";
import { prisma } from "../../../database/prismaClient";

interface ISignInClient {
  username: string;
  password: string;
}

export class SignInClientUseCase {
  async execute({ password, username }: ISignInClient) {
    const user = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new Error("Invalid credentials");
    }

    const token = sign({ username }, CONFIG.accessTokenSecret, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
