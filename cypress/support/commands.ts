/// <reference types="cypress" />
// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getPodcasts', () => {
	cy.intercept({
		method: 'GET',
		url: '**/https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
	})
})

Cypress.Commands.add('getPodcastDetail', (podcastId: number) => {
	cy.intercept({
		method: 'GET',
		url: `**/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
		times: 4,
	})
})

Cypress.Commands.add('getInfoTable', (feedUrl: string) => {
	cy.intercept({
		method: 'GET',
		url: `**/${feedUrl}`,
	})
})

declare namespace Cypress {
	interface Chainable<Subject = any> {
		getPodcasts(): Chainable<any>
		getPodcastDetail(podcastId: number): Chainable<any>
		getInfoTable(feedUrl: string): Chainable<any>
	}
}
