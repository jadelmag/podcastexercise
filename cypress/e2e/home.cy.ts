describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/')
	})

	it('frontpage can be opened', () => {
		cy.contains(/Podcaster/i)
	})

	it('check values from request', () => {
		cy.podcastRequest().then((podcasts) => {
			expect(podcasts.body).to.have.property('contents')
			cy.contains('Million Dollaz Worth Of Game')
			cy.contains(100)
		})
	})

	it('filter podcasts', () => {
		cy.podcastRequest().then((podcasts) => {
			cy.get('input').first().type('million')
			cy.contains(1)
		})
	})

	it('redirect to podcast detail page', () => {
		cy.podcastRequest().then((podcasts) => {
			cy.contains('Million Dollaz Worth Of Game').click()
		})
	})
})
