import { Toolbar } from '@mui/material';
import { React } from 'react';

const displayDesktop = () => <Toolbar className="center">
	SCHOOL MARK LIST</Toolbar>;

const Header = () =>
	<header>
		{displayDesktop()}
	</header>
;

export default Header;
