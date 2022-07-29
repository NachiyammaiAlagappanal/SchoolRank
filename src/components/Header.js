import { Toolbar } from '@mui/material';
import { React } from 'react';

const displayDesktop = () => <Toolbar className="center">
	SCHOOL DATABASE</Toolbar>;

const Header = () =>
	<header>
		{displayDesktop()}
	</header>
;

export default Header;
