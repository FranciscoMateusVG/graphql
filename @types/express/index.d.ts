declare namespace Express {
   
   interface Request {
      knex: Knex;
      usuario: any;
      error: string;
   }

   interface Response {
      usuario: any;
   }
}