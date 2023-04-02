import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Pagination, PaginationProps } from 'semantic-ui-react'
import { Episode } from '../../interfaces/xml.interface'
import { SinglePodcast } from '../../interfaces/podcast.interface'
import { TAM_PAGE } from '../../constants/table.constants'
import { dateParser } from '../../utils/table.parser'

interface TableEpisodesProps {
	episodes: Episode[]
	podcast: SinglePodcast
	description: string
}

const TableEpisodes = ({ episodes, podcast, description }: TableEpisodesProps) => {
	const activePage: number = 1
	const [init, setInit] = useState<number>(0)
	const [end, setEnd] = useState<number>(10)

	const onPageChange = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		data: PaginationProps
	) => {
		const init = ((data.activePage as number) - 1) * TAM_PAGE
		const end = init + TAM_PAGE
		setInit(init)
		setEnd(end)
	}

	return (
		<div>
			<Table celled padded>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell width={8}>Title</Table.HeaderCell>
						<Table.HeaderCell width={2}>Date</Table.HeaderCell>
						<Table.HeaderCell width={2}>Duration</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{episodes.slice(init, end).map((episode: Episode, index: number) => {
						return (
							<Table.Row key={index}>
								<Table.Cell>
									<Link
										to={`episode/${episode.guid}`}
										state={{ episode: episode, podcast: podcast, description: description }}
									>
										{episode.title}
									</Link>
								</Table.Cell>
								<Table.Cell>{dateParser(episode.pubDate)}</Table.Cell>
								<Table.Cell>{episode['itunes:duration']}</Table.Cell>
							</Table.Row>
						)
					})}
				</Table.Body>
			</Table>
			<Pagination
				className="ui right floated"
				defaultActivePage={activePage}
				totalPages={Math.ceil(episodes.length / TAM_PAGE)}
				onPageChange={(event, data) => onPageChange(event, data)}
			/>
		</div>
	)
}

export default TableEpisodes
