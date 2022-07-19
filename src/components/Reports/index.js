import { React } from 'react';
import DropDownBox from './dropDownBox';
import DisplayChart from './displayChart';

const Reports = (context) =>
	<div>
		<DropDownBox { ...context }/>
		<DisplayChart { ...context }/>
	</div>;

export default Reports;
