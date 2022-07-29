import { React } from 'react';
import './App.scss';
import TabFunction from './components/TabContent';
import { Box } from '@mui/material';

const App = (context) =>
	<Box className="App" role="App">
		<TabFunction { ...context }/>
	</Box>;

export default App;
