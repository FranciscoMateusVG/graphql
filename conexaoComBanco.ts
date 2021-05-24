import getConn from "./db/knex";

import createError from "http-errors";
import fetch from "node-fetch";

import { Request, Response, NextFunction } from 'express';

/**Conexao com o banco de dados */
export default async function conexaoBancoDeDados(req: Request, res: Response, next: NextFunction) {
   
   // To Read a Cookie
   let cookie = `connect.sid=${req.cookies["connect.sid"]}`;
   
   try {
      //se em desenvolvimento, não exigir autenticação
      if (!process.env.CORE) {
         let usuarioMock = {
            status: 200,
            Id: 339,
            Login: "mateus",
            Nome: "Mateus",
            Permissao: 0,
            Banco: "Korok-Dev",
            Token_SSRS: "BA81C84D-0AF3-41FF-ADD4-16DCECB6C9D8",
         };
         const knex = await getConn(usuarioMock.Banco);
         req.knex = knex;
         req.usuario = usuarioMock;
         next();
         return;
      }

      //obter conexão com banco caso usuário esteja autenticado
      let usuario = await fetch(`http://${process.env.CORE}/eh_autenticado`, {
         method: "GET",
         headers: {
            cookie: cookie,
         },
      });

      usuario = await usuario.json();

      if (usuario.status == 200) {
         try {
            const knex = await getConn(res.usuario.Banco);
            req.knex = knex;
            req.usuario = usuario;
            next();
            return;
         } catch (err) {
            console.error("Ocorreu um erro ao conectar no banco de dados");
            next(createError(500));
            return;
         }
      }

      //caso status != 200, usuário não está autenticado
      console.log("Você não está logado no sistema");
      next(createError(403));
   } catch (err) {
      console.log(err);
      console.log("Sistema de autenticação temporariamente fora do ar");
      next(createError(500));
   }
};
