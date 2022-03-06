import "dotenv/config";

import express from "express";

import CONFIG from "./config/env";
import { routes } from "./routes";

const app = express();

app.set("port", CONFIG.port);
app.use(express.json());

app.use(routes);

app.listen(3001, () =>
  console.log(`Server is running on PORT: ${CONFIG.port} `)
);
