import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SliderAndToggle from './sliders';
import StudentData from './StudentData';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Paper from '@mui/material/Paper';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

const Menu = (context) => {
	const { state: { value }} = context;

	return (
		<Toolbar sx={ { backgroundColor: '#1976d2', color: 'white' } }>
			<Tabs
				orientation="vertical"
				value={ value }
				onChange={ (event, data) => context.actions
					.changingTab(data) }
				textColor="inherit"
				sx={ { borderRight: 1, borderColor: 'divider' } }
			>

				<Tab label="DATA"/>
				<Tab label="REPORTS"/>
			</Tabs>
		</Toolbar>
	);
};

const TabFunction = (context) => {
	const { state: { value }} = context;

	return (
		<Box sx={ { display: 'flex', height: '730px' } }>
			<Menu { ...context }/>
			<Paper/>
			<Paper elevation={ 24 }/>
			<Box width="100%">
				<Header/>
				<TabPanel value={ value } index={ 0 }>
					<StudentData { ...context }/>
				</TabPanel>
				<TabPanel value={ value } index={ 1 }>
					<SliderAndToggle { ...context }/>
				</TabPanel>
			</Box>
		</Box>
	);
};

export default TabFunction;
