describe('Pocast Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.podcastRequest().then((podcasts) => {
      cy.wait(2000);
      expect(podcasts.body).to.have.property('contents');
      cy.contains('Million Dollaz Worth Of Game').click();
    });
  });

  it('load podcast detail and list of feeds', () => {
    cy.podcastDetailRequest(1460157002).then(() => {
      cy.infoTableRequest(
        'https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game'
      ).then(() => {
        cy.wait(2000);
        cy.contains('by Barstool Sports');
        cy.contains('LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >');
      });
    });
  });

  it('redirect to episode', () => {
    cy.podcastDetailRequest(1460157002).then(() => {
      cy.infoTableRequest(
        'https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game'
      ).then(() => {
        cy.wait(2000);
        cy.contains('by Barstool Sports');
        cy.contains(
          'LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >'
        ).click();
      });
    });
  });
});
