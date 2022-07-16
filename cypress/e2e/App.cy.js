describe('empty spec', () => {
  it('As a user when I visit the page, I should see all movies displayed', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should contain a title', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  })

  it('should contain a footer', () => {
    cy.contains('footer', 'by Cami Anderson & Lourdes Benites')
  })

  it('should contain a movie poster', () => {
    cy.get('div[class="single-movie"]').find('img').should('be.visible');
  })
})