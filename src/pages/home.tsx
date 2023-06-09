import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Label, Segment, Placeholder } from 'semantic-ui-react';
import PodcastCard from '../components/podcastcard/podcastcard';
import { getAllPodcasts } from '../services/podcast.service';
import { Podcast } from '../interfaces/custompodcast.interface';
import { isOutOfDate } from '../utils/date.functions';
import useData from '../hooks/useData';
import useFilter from '../hooks/useFilter';
import {
  loadPocastsStorage,
  savePodcastsStorage,
} from '../utils/storage.functions';

interface HomePageProps {
  loading: boolean;
  updateLoading: (status: boolean) => void;
}

const HomePage = ({ loading, updateLoading }: HomePageProps): JSX.Element => {
  const { podcasts, savePodcasts } = useData();
  const { filter, updateFilter } = useFilter();

  useEffect(() => {
    async function getAllPodcastsApi() {
      updateLoading(true);
      const podcastsApi: Podcast[] = await getAllPodcasts();
      savePodcastsStorage(podcastsApi);
      savePodcasts(podcastsApi);
      updateLoading(false);
    }
    const { podcastsApi, time } = loadPocastsStorage();
    if (podcasts?.length === 0 || isOutOfDate(time)) {
      getAllPodcastsApi();
    } else {
      savePodcasts(podcastsApi);
    }
    () => getAllPodcasts();
  }, []);

  const onUpdateText = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const newText = (event.target as HTMLInputElement).value;
      updateFilter(newText);
    },
    []
  );

  const filteredPodcasts = podcasts?.filter(
    (p: Podcast) =>
      p.author.toLowerCase().includes(filter.toLowerCase()) ||
      p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Segment textAlign="right" className="podcast-no-border">
        <Label color="blue" size="large">
          {filteredPodcasts ? filteredPodcasts?.length : 0}
        </Label>
        <div className="ui icon focus input">
          <i className="search icon" />
          <input
            type="text"
            placeholder="Filter podcasts..."
            name="filter"
            onChange={onUpdateText}
            value={filter}
          />
        </div>
      </Segment>

      <Grid columns={4} padded centered>
        {filteredPodcasts &&
          filteredPodcasts?.map((podcast: Podcast) => {
            return (
              <Grid.Column width={4} key={podcast.id}>
                {loading ? (
                  <Segment raised>
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length="medium" />
                        <Placeholder.Line length="short" />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Segment>
                ) : (
                  <PodcastCard podcast={podcast} />
                )}
              </Grid.Column>
            );
          })}
      </Grid>
    </div>
  );
};

export default HomePage;
