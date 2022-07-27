import { React } from 'react';
import DropDownBox from './dropDownBox';
import ChartBox from './ChartBox';

const Reports = (context) =>
	<div>
		<DropDownBox { ...context }/>
		<ChartBox { ...context }/>
	</div>;

export default Reports;
