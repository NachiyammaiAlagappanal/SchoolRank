import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SliderAndToggle from './sliders';
import StudentData from './StudentData';
import { AppBar, Box, Grid } from '@mui/material';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

const tabs = (context) => {
	const { state: { value }} = context;

	return (
		<Tabs
			value={ value }
			onChange={ (event, data) => context.actions
				.changingTab(data) }
			textColor="inherit"
			variant="fullWidth"
		>
			<Tab label="DATA"/>
			<Tab label="REPORTS"/>
		</Tabs>);
};
const TabFunction = (context) => {
	const { state: { value }} = context;

	return <Box sx={ { borderBottom: 1, borderColor: 'divider', p: 3 } }>
		<AppBar position="static">
			{tabs(context)}
		</AppBar>
		<TabPanel value={ value } index={ 0 }>{StudentData(context)}
		</TabPanel>
		<TabPanel value={ value } index={ 1 }>{ SliderAndToggle(context)}
		</TabPanel>
	</Box>;
};

const TabContent = (context) =>
	<Grid>{TabFunction(context)}
	</Grid>;

export default TabContent;
