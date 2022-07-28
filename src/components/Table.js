/* eslint-disable no-console */
import { React } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { keys, values } from '@laufire/utils/lib';
import { unique } from '@laufire/utils/predicates';
import { map } from '@laufire/utils/collection';

const TableHeader = (columns) =>
	<TableRow>
		{map(columns, (sub) =>
			<TableCell
				key={ sub }
				align="center"
			>
				{sub.toUpperCase()}</TableCell>)}
	</TableRow>;

const TableContent = (filterMark, actions) =>

	map(filterMark, (row, i) => <TableRow key={ i }>{
		map(values(row), (ele, j) =>
			<TableCell
				key={ j }
				align="center"
				onClick={ () => {
					console.log(row);
					actions.unSelected(row);
				} }
			>{ele} </TableCell>)
	}
	</TableRow>);

const table = (context) => {
	const { state: { studentDetails }, data, actions } = context;
	const { content } = data;
	const columns = studentDetails.map((d) => keys(d)).flat()
		.filter(unique);

	return <Table>
		<TableHead>{TableHeader(columns)}</TableHead>
		<TableBody>{TableContent(content, actions)}</TableBody>
	</Table>;
};

const TableContain = (context) =>
	<div style={ { width: '100%' } }>
		<TableContainer> {table(context)}
		</TableContainer>

	</div>;

export default TableContain;
