import "express-async-errors";
import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";

import CONFIG from "./config/env";
import { routes } from "./routes";

const app = express();

app.set("port", CONFIG.port);
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(3001, () =>
  console.log(`Server is running on PORT: ${CONFIG.port} `)
);
