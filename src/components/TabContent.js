import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SliderAndToggle from './sliders';
import StudentData from './StudentData';
import { Box } from '@mui/material';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

const Menu = (context) => {
	const { state: { value }} = context;

	return (
		<Box>
			<Tabs
				orientation="vertical"
				value={ value }
				onChange={ (event, data) => context.actions
					.changingTab(data) }
				textColor="primary"
				sx={ { borderRight: 1, borderColor: 'divider' } }
			>
				<Tab label="DATA"/>
				<Tab label="REPORTS"/>
			</Tabs>
		</Box>
	);
};

const TabFunction = (context) => {
	const { state: { value }} = context;

	return (
		<Box sx={ { display: 'flex' } }>
			<Menu { ...context }/>
			<TabPanel value={ value } index={ 0 }>
				<StudentData { ...context }/>
			</TabPanel>
			<TabPanel value={ value } index={ 1 }>{ SliderAndToggle(context)}
			</TabPanel>
		</Box>
	);
};

export default TabFunction;
