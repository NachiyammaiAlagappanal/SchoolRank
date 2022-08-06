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
import { Box } from '@mui/material';

const TableHeader = (columns) =>
	<TableRow>
		{map(columns, (sub) =>
			<TableCell
				key={ sub }
				align="center"
				className="text"
			>
				{sub}</TableCell>)}
	</TableRow>;

const TableContent = (filterMark, actions) =>

	map(filterMark, (row, i) => <TableRow key={ i }>{
		map(values(row), (ele, j) =>
			<TableCell
				key={ j }
				align="center"
				onClick={ () => {
					actions.updateSelected(row);
				} }
			>{ele} </TableCell>)
	}
	</TableRow>);

const StudentMarks = (context) => {
	const { state: { studentDetails }, data, actions } = context;
	const { content } = data;
	const columns = studentDetails.map((d) => keys(d)).flat()
		.filter(unique);

	return <Table>
		<TableHead>{TableHeader(columns)}</TableHead>
		<TableBody>{TableContent(content, actions)}</TableBody>
	</Table>;
};

const StudentDataTable = (context) =>
	<Box sx={ { width: '100%' } }>
		<TableContainer> {StudentMarks(context)}
		</TableContainer>
	</Box>;

export default StudentDataTable;
