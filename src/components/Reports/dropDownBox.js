import { React } from 'react';

const DropDownBox = (context) => {
	const { state } = context;

	return	<div>
		<select
			id="dropdown-list"
			value={ state.selectedChart }
			onChange={ (evt) =>
				context.actions.setChart(evt.target.value) }
		>
			<option value="HeatMap"> HeatMap </option>
			<option value="PieChart"> PieChart</option>
			<option value="LineChart"> LineChart</option>
			<option value="GroupBarChart"> GroupBarChart</option>
		</select>
	</div>;
};

export default DropDownBox;
