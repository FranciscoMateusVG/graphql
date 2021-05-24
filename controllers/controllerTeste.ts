import { Request, Response } from "express";
import { Knex } from "knex";

export const testandoController = async (req: Request, res: Response) => {
   try {
      res.send({
         mensagem: "ok",
      });
   } catch (error) {
      res.status(500).send({
         mensagem: "Erro interno do servidor.",
         err: error,
      });
   }
};
