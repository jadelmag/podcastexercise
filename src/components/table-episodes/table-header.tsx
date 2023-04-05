import { SemanticWIDTHS, Table } from 'semantic-ui-react';

interface TableHeaderProps {
  headers: Header[];
}

interface Header {
  title: string;
  width: SemanticWIDTHS | undefined;
}

const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <Table.Header>
      <Table.Row>
        {headers.map((header: Header, index: number) => {
          return (
            <Table.HeaderCell
              key={`${index}-${header.width}`}
              width={header.width}
            >
              {header.title}
            </Table.HeaderCell>
          );
        })}
      </Table.Row>
    </Table.Header>
  );
};

export default TableHeader;
