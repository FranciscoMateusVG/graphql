import request from "supertest";
import app from "../../app";

describe("Testa o controller 'Teste'", () => {
   it("GET Teste", async (done) => {
      const responseGet = await request(app).get("/teste");

      expect(responseGet.body).toMatchObject({
         mensagem: "ok",
      });

      expect(responseGet.status).toBe(200);

      done();
   });
});
