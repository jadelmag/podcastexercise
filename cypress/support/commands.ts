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
  });
});

Cypress.Commands.add('getPodcastDetail', (podcastId: number) => {
  cy.intercept({
    method: 'GET',
    url: `**/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    times: 4,
  });
});

Cypress.Commands.add('getInfoTable', (feedUrl: string) => {
  cy.intercept({
    method: 'GET',
    url: `**/${feedUrl}`,
  });
});

Cypress.Commands.add('podcastRequest', () => {
  return cy.request({
    url: `https://api.allorigins.win/get?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`,
    method: 'GET',
    timeout: 80000,
  });
});

Cypress.Commands.add('podcastDetailRequest', (podcastId: number) => {
  return cy.request({
    url: `https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    method: 'GET',
    timeout: 80000,
  });
});

Cypress.Commands.add('infoTableRequest', (feedUrl: string) => {
  return cy.request({
    url: `https://api.allorigins.win/get?url=${feedUrl}`,
    method: 'GET',
    timeout: 80000,
  });
});

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getPodcasts(): Chainable<any>;
    getPodcastDetail(podcastId: number): Chainable<any>;
    getInfoTable(feedUrl: string): Chainable<any>;
    podcastRequest(): Chainable<any>;
    podcastDetailRequest(podcastId: number): Chainable<any>;
    infoTableRequest(feedUrl: string): Chainable<any>;
  }
}
