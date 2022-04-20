describe('Test', function () {
  it('viewProfile', function () {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-15');
    cy.get('button').contains('Login').click();
    cy.get('input[name="username"]').type(name());

    cy.get('input[name="password"]').type(pass(8));

    cy.get('button').contains('Login').click();
    // cy.get("Button[name='button']").click();
    cy.visit('http://localhost:3000/profile');
  });

  function pass(i) {
    const pass = '12345678';
    return pass;
  }
  function name() {
    var text = 'he.patel@ufl.edu';
    return text;
  }
});
