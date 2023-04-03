describe('Episode Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/')
	})

	it('load episode', () => {
		cy.getPodcasts()
		cy.wait(40000)
		cy.contains('Million Dollaz Worth Of Game').click()
		cy.getPodcastDetail(1460157002)
		cy.getInfoTable('https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game')
		cy.wait(80000)
		cy.contains('LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >').click()
		cy.contains('LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >')
		cy.contains(
			'We haven\'t had a Dave since the one and only Miami Portnoy. Rapper, comedian, and actor, Lil Dicky been a viral sensation since the rollout of his first hit single "Ex-Boyfriend" in 2013, and has since released multiple successful albums and singles, including "Freaky Friday" featuring Chris Brown and "Earth" featuring numerous celebrity cameos. He\'s also known for his comedic talent, which he often incorporates into his music videos, live performances, and hit TV show loosely based on his own life and experiences, "Dave". We dive into his process and journey from going out on a limb and spending his bar mitzvah money on music videos to working with legends like Snoop Dogg.'
		)
	})
})
