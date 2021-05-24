import request from "supertest";
import app from "../../app";

describe("Testa o controller 'Sample'", () => {
   it("GET Sample", async (done) => {
      const responseGet = await request(app).get("/sample");

      expect(responseGet.body).toMatchObject([
         {
            mensagem: "ok",
         },
      ]);

      expect(responseGet.status).toBe(200);

      done();
   });
});
