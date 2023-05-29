import { Request, Response } from "express";

class Controller {
  public async get(req: Request, res: Response) {
    try {
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  }
}

export default Controller;
