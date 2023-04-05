import React from 'react';
import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PodcastList from './podcastlist';
import { SinglePodcast } from '../../interfaces/podcast.interface';

describe('Unit Test PodcastList', () => {
  const singlePodcast: SinglePodcast = {
    id: 1460157002,
    artwork:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/600x600bb.jpg',
    name: 'Million Dollaz Worth Of Game',
    feedUrl:
      'https://mcsorleys.barstoolsports.com/feed/million-dollaz-worth-of-game',
    artistName: 'Barstool Sports',
    numEpisodes: 215,
  };

  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >;

  test('render component with loading true', () => {
    component = render(
      <PodcastList
        loading
        podcast={singlePodcast}
        episodes={[]}
        description={'example of description'}
      />
    );
    const numEpisodes = screen.getByText(
      `Episodes: ${singlePodcast.numEpisodes}`
    );
    expect(numEpisodes).toBeInTheDocument();
    expect(numEpisodes.innerHTML).toBe(
      `Episodes: ${singlePodcast.numEpisodes}`
    );
    const numPlaceholders = component.container.querySelector('#placeholder');
    expect(numPlaceholders).toBeInTheDocument();
  });

  test('render component with loading false', () => {
    component = render(
      <PodcastList
        loading={false}
        podcast={singlePodcast}
        episodes={[]}
        description={'example of description'}
      />
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
