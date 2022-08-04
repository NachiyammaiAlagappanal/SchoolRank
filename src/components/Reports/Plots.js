import { React } from 'react';
import DropDownBox from './DropDownBox';
import ChartBox from './ChartBox';

const Plots = (context) =>
	<div>
		<DropDownBox { ...context }/>
		<ChartBox { ...context }/>
	</div>;

export default Plots;
