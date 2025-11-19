const request = require("supertest");
const app = require("./app"); 
describe("API Hello World", () => {
  it('Deve retornar "Hello DevOps World, Protect the main branch!" na rota /', async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.text).toBe("Hello DevOps World, Protect the main branch!");
  });
});
