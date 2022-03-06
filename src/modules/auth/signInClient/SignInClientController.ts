import { Request, Response } from "express";

import { SignInClientUseCase } from "./SignInClientUseCase";

export class SignInClientController {
  async SignIn(req: Request, res: Response) {
    const { username, password } = req.body;

    const signInClientUseCase = new SignInClientUseCase();
    const token = await signInClientUseCase.execute({
      username,
      password,
    });

    return res.json(token);
  }
}
