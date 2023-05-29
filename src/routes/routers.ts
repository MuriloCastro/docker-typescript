import { Router, Express } from "express";
import Controller from "../controllers/Controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  const controller = new Controller();

  app.use("/api", router);
  router.get("/", controller.get);
};
