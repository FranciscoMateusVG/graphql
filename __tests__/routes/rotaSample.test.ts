import {
   sampleController
} from "../../controllers/controllerSample";

const getSpy = jest.fn();
const postSpy = jest.fn();
const deleteSpy = jest.fn();
const updateSpy = jest.fn();

jest.doMock("express", () => {
   return {
      Router() {
         return {
            get: getSpy,
            post: postSpy,
            delete: deleteSpy,
            put: updateSpy,
         };
      },
   };
});

describe("Testa as rotas que...", () => {
   require("../../routes/rotaSample");

   it("teste rota '/sample'", () => {
      expect(getSpy).toHaveBeenCalledWith("/sample", sampleController);
   });

});