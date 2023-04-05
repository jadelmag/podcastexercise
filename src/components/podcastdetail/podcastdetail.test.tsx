import React from 'react';
import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PodcastDetail from './podcastdetail';
import { SinglePodcast } from '../../interfaces/podcast.interface';
import { BrowserRouter } from 'react-router-dom';

describe('Unit Test PodcastDetail', () => {
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
  const description: string = 'description of podcast';

  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <PodcastDetail podcast={singlePodcast} description={description} />
      </BrowserRouter>
    );
  });

  test('render component with link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/podcast/${singlePodcast.id}`);
  });

  test('render card with image', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', singlePodcast.artwork);
  });

  test('render card with header', () => {
    const headerText = screen.getByText(singlePodcast.name);
    expect(headerText).toBeInTheDocument();
  });

  test('render card with artist name', () => {
    const artistName = screen.getByText(`by ${singlePodcast.artistName}`);
    expect(artistName).toBeInTheDocument();
  });

  test('render card with description', () => {
    const descriptionCard = screen.getByText(description);
    expect(descriptionCard).toBeInTheDocument();
  });
});
