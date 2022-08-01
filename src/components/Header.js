import { Toolbar } from '@mui/material';
import { React } from 'react';

const displayHeader = () => <Toolbar className="center">
	STUDENT DATABASE</Toolbar>;

const Header = () =>
	<header>
		{displayHeader()}
	</header>
;

export default Header;
