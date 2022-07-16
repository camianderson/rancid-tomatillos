describe('empty spec', () => {
  it('should open movie details of a specific movie', () => {
    cy.visit('http://localhost:3000')
    cy.contains('div[class="single-movie"]', 'Mulan')
    .click()
  })

  it('should contain Rancid Tomatillos title', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  })

  it('should contain the movie title', () => {
    cy.contains('h1', 'Mulan')
  })

  it('should contain the movie description', () => {
    cy.contains('p', 'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
  })

  it('should contain rating details', () => {
    cy.contains('p', 'Rating: 5.1')
  })

  it('should contain movie genre', () => {
    cy.contains('p', 'Genre: Action, Adventure, Drama, Fantasy')
  })

  it('should contain the movie release date', () => {
    cy.contains('p', 'Release Date: 2020-09-04')
  })

  it('should contain back button', () => {
    cy.contains('button', 'Back')
  })

  it('should be able to click the button to go back to the main page', () => {
    cy.get('button')
    .click()
    cy.url('http://localhost:3000')
  })

  it('should contain a footer', () => {
    cy.contains('footer', 'by Cami Anderson & Lourdes Benites')
  })
})