import { React } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Toolbar } from '@mui/material';

const MenuBar = (context) => {
	const { state: { value }} = context;

	return (
		<Toolbar sx={ { backgroundColor: '#1976d2', color: 'white',
			height: '100vh' } }
		>
			<Tabs
				orientation="vertical"
				value={ value }
				onChange={ (event, tabIndex) => context.actions
					.toggleMenu(tabIndex) }
				textColor="inherit"
				sx={ { borderRight: 1, borderColor: 'divider' } }
			>

				<Tab label="DATA"/>
				<Tab label="REPORTS"/>
			</Tabs>
		</Toolbar>
	);
};

export default MenuBar;
