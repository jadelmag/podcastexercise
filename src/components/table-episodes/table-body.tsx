import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Episode } from '../../interfaces/xml.interface';
import { SinglePodcast } from '../../interfaces/podcast.interface';
import { dateParser } from '../../utils/table.parser';

interface TableBodyProps {
  episodes: Episode[];
  podcast: SinglePodcast;
  description: string;
  init: number;
  end: number;
}

const TableBody = ({
  episodes,
  podcast,
  description,
  init,
  end,
}: TableBodyProps) => {
  return (
    <Table.Body>
      {episodes.slice(init, end).map((episode: Episode, index: number) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>
              <Link
                to={`episode/${episode.guid}`}
                state={{
                  episode: episode,
                  podcast: podcast,
                  description: description,
                }}
              >
                {episode.title}
              </Link>
            </Table.Cell>
            <Table.Cell>{dateParser(episode.pubDate)}</Table.Cell>
            <Table.Cell>{episode['itunes:duration']}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};

export default TableBody;
