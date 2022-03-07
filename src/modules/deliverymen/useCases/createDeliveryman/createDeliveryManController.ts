import { Request, Response } from "express";

import { CreateDeliveryManUseCase } from "./createDeliverymanUseCase";

interface ICreateBodyParams {
  username: string;
  password: string;
}

export class CreateDeliveryManController {
  public async create(
    req: Request<unknown, unknown, ICreateBodyParams>,
    res: Response
  ) {
    const { password, username } = req.body;

    const createDeliverymanUseCase = new CreateDeliveryManUseCase();
    const user = await createDeliverymanUseCase.execute({
      password,
      username,
    });

    return res.json(user);
  }
}
