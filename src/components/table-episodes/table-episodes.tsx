import { useState } from 'react';
import { Table, Pagination, PaginationProps } from 'semantic-ui-react';
import { Episode } from '../../interfaces/xml.interface';
import { SinglePodcast } from '../../interfaces/podcast.interface';
import { TAM_PAGE } from '../../constants/table.constants';
import { Header } from '../../interfaces/table.interface';
import TableHeader from './table-header';
import TableBody from './table-body';

interface TableEpisodesProps {
  episodes: Episode[];
  podcast: SinglePodcast;
  description: string;
}

const TableEpisodes = ({
  episodes,
  podcast,
  description,
}: TableEpisodesProps) => {
  const activePage: number = 1;
  const headers: Header[] = [
    { title: 'Title', width: 8 },
    { title: 'Date', width: 2 },
    { title: 'Duration', width: 2 },
  ];

  const [init, setInit] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);

  const onPageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    const init = ((data.activePage as number) - 1) * TAM_PAGE;
    const end = init + TAM_PAGE;
    setInit(init);
    setEnd(end);
  };

  return (
    <div>
      <Table celled padded>
        <TableHeader headers={headers} />
        <TableBody
          episodes={episodes}
          podcast={podcast}
          description={description}
          init={init}
          end={end}
        />
      </Table>
      <Pagination
        className="ui right floated"
        defaultActivePage={activePage}
        totalPages={Math.ceil(episodes.length / TAM_PAGE)}
        onPageChange={(event, data) => onPageChange(event, data)}
      />
    </div>
  );
};

export default TableEpisodes;
