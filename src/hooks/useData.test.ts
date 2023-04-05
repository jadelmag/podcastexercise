import useData from './useData';
import { act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Podcast } from '../interfaces/custompodcast.interface';
import { Episode } from '../interfaces/xml.interface';
import { SinglePodcast } from '../interfaces/podcast.interface';

describe('useData hook', () => {
  test('check initial values', () => {
    const { result } = renderHook(useData);

    expect(result.current.podcasts.length).toBe(0);
    expect(result.current.episodes.length).toBe(0);
    expect(result.current.podcastDetail).toBe(null);
  });

  test('update podcast', () => {
    const { result } = renderHook(useData);
    let podcasts: Podcast[];
    act(() => {
      podcasts = [
        {
          id: '1678378239',
          author: 'Cadence13 and Parallel',
          name: 'This Little Light',
          img: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png',
          summary:
            'Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.',
        },
      ];
      result.current.savePodcasts(podcasts);
    });
    expect(result.current.podcasts.length).toBe(1);
    expect(result.current.podcasts[0].id).toBe('1678378239');
  });

  test('update episodes', () => {
    const { result } = renderHook(useData);
    const episodes: Episode[] = [
      {
        audio:
          'https://dts.podtrac.com/redirect.mp3/landmark-dynamic.barstoolsports.com/stream/MDOmxGJNugOSaiL3eXonbpsV/audio.mp3?v=eyJzcmMiOiJodHRwczovL2JhcnN0b29sLXBvZGNhc3RzLnMzLmFtYXpvbmF3cy5jb20vYmFyc3Rvb2wtc3BvcnRzL21pbGxpb24tZG9sbGF6LXdvcnRoLW9mLWdhbWUvTURPbXhHSk51Z09TYWlMM2VYb25icHNWL0VQLTIxMy1GVC5MSUwtRElDS1ktLS1BVURJTy45OTMxZDgzOS45NnMubXAzIiwiYmVjIjpbIm1hbGUiLCJsaWZlc3R5bGUiXSwiYWZwIjpudWxsfQ%3D%3D',
        'dc:creator': 'Barstool Sports',
        description:
          '<p>We haven\'t had a Dave since the one and only Miami Portnoy. Rapper, comedian, and actor, Lil Dicky been a viral sensation since the rollout of his first hit single "Ex-Boyfriend" in 2013, and has since released multiple successful albums and singles, including "Freaky Friday" featuring Chris Brown and "Earth" featuring numerous celebrity cameos. He\'s also known for his comedic talent, which he often incorporates into his music videos, live performances, and hit TV show loosely based on his own life and experiences, "Dave". We dive into his process and journey from going out on a limb and spending his bar mitzvah money on music videos to working with legends like Snoop Dogg.</p><br /><p>You can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit <a href="https://barstool.link/mworthofgame">barstool.link/mworthofgame</a></p> >',
        guid: 'ca695347-0bc7-4075-9801-267de3612c69',
        'itunes:duration': '01:07:07',
        link: 'https://www.barstoolsports.com/shows/million-dollaz-worth-of-game',
        pubDate: 'Sun, 2 Apr 2023 23:30:00 +0000',
        title: 'LIL DICKY: MILLION DOLLAZ WORTH OF GAME EPISODE 213 >',
      },
    ];

    act(() => {
      result.current.saveEpisodes(episodes);
    });
    expect(result.current.episodes.length).toBe(1);
    expect(result.current.episodes[0].guid).toBe(
      'ca695347-0bc7-4075-9801-267de3612c69'
    );
  });

  test('update podcastDetail', () => {
    const { result } = renderHook(useData);
    let podcastDetail: SinglePodcast = {
      id: 1460157002,
      numEpisodes: 215,
      name: 'Million Dollaz Worth Of Game',
      artistName: 'Barstool Sports',
      artwork:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/600x600bb.jpg',
      feedUrl:
        'https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game',
    };
    act(() => {
      result.current.savePodcastDetail(podcastDetail);
    });
    expect(result.current.podcastDetail).not.toBeNull();
    expect(result.current.podcastDetail?.id).toBe(1460157002);
  });
});
