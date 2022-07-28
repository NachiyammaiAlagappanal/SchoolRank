import { React } from 'react';
import './App.scss';
import Header from './components/Header';
import TabFunction from './components/TabContent';
import { Box } from '@mui/material';

const App = (context) =>
	<Box className="App" role="App">
		<Header/>
		<TabFunction { ...context }/>
	</Box>;

export default App;
