import { React } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import TabPanel from './components/TabPanel';
import Data from './components/Data';
import Reports from './components/Reports';

const App = (context) => {
	const { state: { value }} = context;

	return <Box className="App" role="App">
		<Box sx={ { display: 'flex' } }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<Header/>
				<TabPanel value={ value } index={ 0 }>
					<Data { ...context }/>
				</TabPanel>
				<TabPanel value={ value } index={ 1 }>
					<Reports { ...context }/>
				</TabPanel>
			</Box>
		</Box>
	</Box>;
};

export default App;
