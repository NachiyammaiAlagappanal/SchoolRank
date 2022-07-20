/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */
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

const TableContent = (filterMark) =>
	map(filterMark, (row, i) => <TableRow key={ i }>{
		map(values(row), (ele, j) =>
			<TableCell
				key={ j }
				align="center"
			>{ele} </TableCell>)
	}
	</TableRow>);

const table = (context) => {
	const { state: { studentDetails }, data } = context;
	const { content } = data;
	const columns = studentDetails.map((d) => keys(d)).flat()
		.filter(unique);

	console.log(content);
	return <Table>
		<TableHead>{TableHeader(columns)}</TableHead>
		<TableBody>{TableContent(content)}</TableBody>
	</Table>;
};
const TableContain = (context) =>
	<TableContainer> { table(context) }
	</TableContainer>;

export default TableContain;
