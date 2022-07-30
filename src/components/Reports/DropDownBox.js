import { React } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DropDownBox = (context) => {
	const { state, config: { charts }} = context;

	return	<div style={ { padding: 20 } }>
		<FormControl fullWidth={ true }>
			<InputLabel>ChartTypes</InputLabel>
			<Select
				id="dropdown-list"
				value={ state.selectedChart }
				label="ChartTypes"
				autoWidth={ true }
				onChange={ (evt) =>
					context.actions.setChart(evt.target.value) }
			>
				{charts.map((type) =>
					<MenuItem key={ type } value={ type }>{type}</MenuItem>)}
			</Select>
		</FormControl>
	</div>;
};

export default DropDownBox;
