import { React } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { map } from '@laufire/utils/collection';
import { Grid, Slider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Poll, TableView } from '@mui/icons-material';
import TableContain from './Table';
import FilterManager from '../services/FilterManager';
import Reports from './Reports';

const sliders = (context) => {
	const { state: { range }, data: subject } = context;

	return (
		<Slider
			getAriaLabel={ () => 'Mark range' }
			value={ range[subject] }
			onChange={ (evt) => context.actions
				.changingRange({ [subject]: evt.target.value }) }
			color="primary"
			valueLabelDisplay="auto"
			min={ 0 }
			max={ 100 }
		/>);
};

const sliderFunction = (context) => {
	const { config: { subjects }} = context;

	return (
		<TableRow item={ true }>
			<TableCell/>
			<TableCell/>
			{ map(subjects, (subject) =>
				<TableCell
					key={ subject }
				>{sliders({ ...context,
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
			onClick={ () => actions.Toggle('Table') }
		>
			<TableView/></ToggleButton>
		<ToggleButton
			value="Plot"
			onClick={ () => actions.Toggle('Plot') }
		><Poll/></ToggleButton>
	</ToggleButtonGroup>;

const Toggle = (context) => {
	const { state: { alignment }, actions } = context;

	return Toggling(alignment, actions);
};

const checkToggle = (context) => {
	const { state: { alignment, studentDetails }} = context;

	return alignment === 'Table'
		? TableContain({ ...context, data: {
			content: FilterManager.filterMark({
				...context,
				data: studentDetails,
			}),
		}})
		: Reports(context);
};

const MarkSheetD = (context) =>
	<Grid padding={ 5 }>
		{Toggle(context)}
		<Table className="table">
			<TableHead>{sliderFunction(context)}</TableHead></Table>
		<Grid container={ true } justifyContent="center">
			{checkToggle(context)}
		</Grid>
	</Grid>;

export default MarkSheetD;
