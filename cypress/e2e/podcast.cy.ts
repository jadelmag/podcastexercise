describe('Pocast Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/')
	})

	it('load podcast detail and list of feeds', () => {
		cy.getPodcasts()
		cy.wait(40000)
		cy.contains('Million Dollaz Worth Of Game').click()
		cy.getPodcastDetail(1460157002)
		cy.getInfoTable('https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game')
		cy.wait(80000)
		cy.contains('by Barstool Sports')
		cy.contains('LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >')
	})

	it('redirect to episode', () => {
		cy.getPodcasts()
		cy.wait(40000)
		cy.contains('Million Dollaz Worth Of Game').click()
		cy.getPodcastDetail(1460157002)
		cy.getInfoTable('https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game')
		cy.wait(80000)
		cy.contains('by Barstool Sports')
		cy.contains('LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >').click()
	})
})
