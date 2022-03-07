import { Request, Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

interface ICreateBodyParams {
  username: string;
  password: string;
}

export class CreateClientController {
  public async create(
    req: Request<unknown, unknown, ICreateBodyParams>,
    res: Response
  ) {
    const { username, password } = req.body;

    const createClientUseCase = new CreateClientUseCase();
    const user = await createClientUseCase.execute({
      username,
      password,
    });

    return res.json(user);
  }
}
