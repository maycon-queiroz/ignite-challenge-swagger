import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFiler from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFiler));

app.use("/users", usersRoutes);

export { app };
