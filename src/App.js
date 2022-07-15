import { React } from 'react';
import './App.scss';
import Header from './components/Header';
// import MarkSheetD from './components/MITable';
import TabContent from './components/TabContent';

const App = (context) =>
	<div className="App" role="App">
		<div>{Header()}</div>
		<div className="container">
			{TabContent(context)}</div>
	</div>;

export default App;
