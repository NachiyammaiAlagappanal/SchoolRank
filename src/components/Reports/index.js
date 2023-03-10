import { React } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { map } from '@laufire/utils/collection';
import { Grid, Slider, Paper } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Poll, TableView } from '@mui/icons-material';
import StudentDataTable from '../StudentDataTable';
import FilterManager from '../../services/FilterManager';
import Plots from './Plots';

const Sliders = (context) => {
	const { state: { filter }, data: subject } = context;

	return (
		<Slider
			getAriaLabel={ () => 'Mark Range' }
			value={ filter[subject] }
			onChange={ (evt) => context.actions
				.updateFilter({ [subject]: evt.target.value }) }
			color="primary"
			valueLabelDisplay="auto"
			min={ 0 }
			max={ 100 }
		/>);
};

const sliderFunction = (context) => {
	const { config: { subjects }} = context;

	return (
		<TableRow>
			<TableCell/>
			<TableCell/>
			{ map(subjects, (subject) =>
				<TableCell
					key={ subject }
				>{Sliders({ ...context,
						data: subject })}</TableCell>)}</TableRow>);
};

const Toggling = (alignment, actions) =>
	<ToggleButtonGroup
		color="primary"
		value={ alignment }
		exclusive={ true }
	>
		<ToggleButton
			value="Table"
			onClick={ () => actions.toggleTab('Table') }
		>
			<TableView/></ToggleButton>
		<ToggleButton
			value="Plot"
			onClick={ () => actions.toggleTab('Plot') }
		><Poll/></ToggleButton>
	</ToggleButtonGroup>;

const ToggleTab = (context) => {
	const { state: { alignment }, actions } = context;

	return Toggling(alignment, actions);
};

const TablePlotToggle = (context) => {
	const { state: { alignment, studentDetails }} = context;
	const filterMark = FilterManager.filterMark({ ...context,
		data: studentDetails });

	return alignment === 'Table'
		? StudentDataTable({ ...context, data: {
			content: filterMark,
		}})
		: Plots(context);
};

const Reports = (context) =>
	<Grid padding={ 5 }>
		{ToggleTab(context)}
		<Table className="table">
			<TableHead>{sliderFunction(context)}</TableHead></Table>
		<Paper
			elevation={ 10 }
			sx={ { margin: '8', padding: '2' } }
		>
			<Grid container={ true } justifyContent="center">
				{TablePlotToggle(context)}
			</Grid>		</Paper>
	</Grid>;

export default Reports;
