import { React } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import DoneIcon from '@mui/icons-material/Done';

const vertical = 'top';
const horizontal = 'center';

const action = () =>
	<Button
		variant="contained"
		color="success"
	><DoneIcon/> </Button>;

const snackBar = (error, actions) =>
	<Snackbar
		key={ vertical + horizontal }
		anchorOrigin={ { vertical, horizontal } }
		open={ error }
		onClose={ () => actions.editStatus() }
		autoHideDuration={ 600 }
		message="Successfully Saved"
		action={ action() }
	/>;

export default snackBar;
