import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MarkSheetD from './MITable';
import Inputs from './Input';
import { Box, Grid } from '@mui/material';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};
const TabFunction = (context) => {
	const { state: { value }} = context;

	return <Box>
		<Tabs
			value={ value }
			onChange={ (event, data) => context.actions
				.changingTab(data) }
			centered={ true }
			textColor="inherit"
			indicatorColor="secondary"
		>
			<Tab label="Data"/>
			<Tab label="Reports"/>
		</Tabs>
		<TabPanel value={ value } index={ 0 }>{Inputs(context)}
		</TabPanel>
		<TabPanel value={ value } index={ 1 }>{ MarkSheetD(context)}
		</TabPanel>
	</Box>;
};

const TabContent = (context) =>
	<Grid>{TabFunction(context)}
	</Grid>;

export default TabContent;
