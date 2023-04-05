import React from 'react';
import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PodcastCard from './podcastcard';
import { Podcast } from '../../interfaces/custompodcast.interface';
import { BrowserRouter } from 'react-router-dom';

describe('Unit Test PodcastCard', () => {
  const podcast: Podcast = {
    id: '1466060738',
    author: 'shewillrockyou',
    img: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts114/v4/c5/c5/e8/c5c5e81f-a6c0-8f42-e84f-ce3005e388a3/mza_8224330391053601980.jpg/170x170bb.png',
    name: 'She Will Rock You',
    summary:
      'Rock and roll is not dead. It’s very much alive and well. Listen along as Bethanne Tarpley and Leah Jones tell the stories of bands that were famous before they were born, badass women in the music industry and interview new acts you need to know! Support this podcast: https://podcasters.spotify.com/pod/show/she-will-rock-you/support',
  };

  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <PodcastCard podcast={podcast} />
      </BrowserRouter>
    );
  });

  test('render component with link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/podcast/${podcast.id}`);
  });

  test('render component with image', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', podcast.img);
  });

  test('render component with text', () => {
    const image = screen.getByText(podcast.name);
    expect(image).toBeInTheDocument();
  });

  test('render component with author', () => {
    const image = screen.getByText(`Author: ${podcast.author}`);
    expect(image).toBeInTheDocument();
  });
});
