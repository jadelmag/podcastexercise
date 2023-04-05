import React from 'react';
import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AudioPlayer from './audioplayer';
import { Episode } from '../../interfaces/xml.interface';

describe('Unit Test AudioPlayer', () => {
  const episode: Episode = {
    guid: 'ca695347-0bc7-4075-9801-267de3612c69',
    title: 'LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >',
    description:
      '<p>We haven\'t had a Dave since the one and only Miami Portnoy. Rapper, comedian, and actor, Lil Dicky been a viral sensation since the rollout of his first hit single "Ex-Boyfriend" in 2013, and has since released multiple successful albums and singles, including "Freaky Friday" featuring Chris Brown and "Earth" featuring numerous celebrity cameos. He\'s also known for his comedic talent, which he often incorporates into his music videos, live performances, and hit TV show loosely based on his own life and experiences, "Dave". We dive into his process and journey from going out on a limb and spending his bar mitzvah money on music videos to working with legends like Snoop Dogg.</p><br /><p>You can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit <a href="https://barstool.link/mworthofgame">barstool.link/mworthofgame</a></p> >',
    audio:
      'https://dts.podtrac.com/redirect.mp3/landmark-dynamic.barstoolsports.com/stream/MDOmxGJNugOSaiL3eXonbpsV/audio.mp3?v=eyJzcmMiOiJodHRwczovL2JhcnN0b29sLXBvZGNhc3RzLnMzLmFtYXpvbmF3cy5jb20vYmFyc3Rvb2wtc3BvcnRzL21pbGxpb24tZG9sbGF6LXdvcnRoLW9mLWdhbWUvTURPbXhHSk51Z09TYWlMM2VYb25icHNWL0VQLTIxMy1GVC5MSUwtRElDS1ktLS1BVURJTy45OTMxZDgzOS45NnMubXAzIiwiYmVjIjpbIm1hbGUiLCJsaWZlc3R5bGUiXSwiYWZwIjpudWxsfQ%3D%3D',
    'dc:creator': 'Barstool Sports',
    'itunes:duration': '01:07:07',
    link: 'https://www.barstoolsports.com/shows/million-dollaz-worth-of-game',
    pubDate: 'Sun, 2 Apr 2023 23:30:00 +0000',
  };

  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    component = render(<AudioPlayer episode={episode} />);
  });

  afterEach(() => {
    component.unmount();
  });

  test('render component with title', () => {
    const title = screen.getByText(episode.title);
    expect(title).toBeInTheDocument();
  });

  test('render component with audio', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
