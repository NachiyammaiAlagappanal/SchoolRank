import { React } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SliderAndToggle from './Sliders';
import Data from './Data';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Paper from '@mui/material/Paper';

const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

const MenuBar = (context) => {
	const { state: { value }} = context;

	return (
		<Toolbar sx={ { backgroundColor: '#1976d2', color: 'white' } }>
			<Tabs
				orientation="vertical"
				value={ value }
				onChange={ (event, data) => context.actions
					.toggleMenu(data) }
				textColor="inherit"
				sx={ { borderRight: 1, borderColor: 'divider' } }
			>

				<Tab label="DATA"/>
				<Tab label="REPORTS"/>
			</Tabs>
		</Toolbar>
	);
};

const TabContent = (context) => {
	const { state: { value }} = context;

	return (
		<Box sx={ { display: 'flex', height: '730px' } }>
			<MenuBar { ...context }/>
			<Paper/>
			<Paper elevation={ 24 }/>
			<Box width="100%">
				<Header/>
				<TabPanel value={ value } index={ 0 }>
					<Data { ...context }/>
				</TabPanel>
				<TabPanel value={ value } index={ 1 }>
					<SliderAndToggle { ...context }/>
				</TabPanel>
			</Box>
		</Box>
	);
};

export default TabContent;
