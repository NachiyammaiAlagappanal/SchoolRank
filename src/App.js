import { React } from 'react';
import './App.scss';
import TabContent from './components/TabContent';
import { Box } from '@mui/material';

const App = (context) =>
	<Box className="App" role="App">
		<TabContent { ...context }/>
	</Box>;

export default App;
