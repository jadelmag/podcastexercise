describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/')
	})

	it('frontpage can be opened', () => {
		cy.contains(/Podcaster/i)
	})

	it('check values from request', () => {
		cy.getPodcasts()
		cy.wait(20000)
		cy.contains(100)
	})

	it('filter podcasts', () => {
		cy.getPodcasts()
		cy.wait(20000)
		cy.get('input').first().type('million')
		cy.contains(1)
	})

	it('redirect to podcast detail page', () => {
		cy.getPodcasts()
		cy.wait(20000)
		cy.contains('Million Dollaz Worth Of Game').click()
	})
})
