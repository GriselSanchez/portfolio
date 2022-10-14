describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h1').contains("Hi, I'm Grisel.")
  })
})
