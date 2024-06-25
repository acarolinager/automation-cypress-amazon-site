import LoginPage from "../pages/LoginPage";

describe('Books API', () => {
  const loginPage = new LoginPage();

  before(() => {
    const requestBody = {
      "clientName": "Ana Test",
      "clientEmail": "anatest007@test.com",
  };
    // Gerar token
    cy.api({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/api-clients/',
      body: requestBody
    }).then((response) => {
      expect(response.status).to.equal(201);
      const bearerToken = (response.body.accessToken);
      Cypress.env('bearerToken', bearerToken);
      cy.log(`Bearer token received: ${bearerToken}`);
    });
  });

  
  it('POST Criar reserva', () => {
    const requestBody = {
      "bookId": 4,
      "customerName": "Ana Test",
  };
    cy.api({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/orders',
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
      body: requestBody
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
});

  it('POST Criar Reserva com outro nome', () => {
    const requestBody = {
      "bookId": 4,
      "customerName": "jhonatan",
  };
    cy.api({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/orders',
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
      body: requestBody
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it('GET Status', () => {
    cy.api({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/statuS',
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET Lista de livros', () => {
    cy.api({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/books?type=fiction',
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET Pesquisar livros', () => {
    cy.api({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/books/',
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET Pesquisar 1 livro', () => {
    const bookId = 3;
    cy.api({
      method: 'GET',
      url: `https://simple-books-api.glitch.me/books/${bookId}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET Consultar reserva', () => {
    cy.api({
      method: 'GET',
      url: `https://simple-books-api.glitch.me/orders`,
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('GET Consultar 1 reserva', () => {
    cy.api({
      method: 'GET',
      url: `https://simple-books-api.glitch.me/orders`,
      headers: {
        'Authorization': `Bearer ${Cypress.env('bearerToken')}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

});
