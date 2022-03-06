import { Request, Response } from "express";

import { CreateClientUseCase } from "./CreateClientUseCase";

interface IReqBody {
  username: string;
  password: string;
}

export class CreateClientController {
  async create(req: Request<unknown, unknown, IReqBody>, res: Response) {
    const { username, password } = req.body;

    const createClientUseCase = new CreateClientUseCase();
    const user = await createClientUseCase.execute({
      username,
      password,
    });

    return res.json(user);
  }
}
