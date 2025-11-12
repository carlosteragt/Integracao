const request = require("supertest");
const app = require("./app"); 
describe("API Olá Mundo", () => {
  it('Deve retornar "Olá Mundo DevOps, Proteger a Branch main!" na rota /', async () => {
 
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.text).toBe("Olá Mundo DevOps, Proteger a Branch main!");
  });
});
