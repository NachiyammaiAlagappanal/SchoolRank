import { React } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Tooltip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const vertical = 'top';
const horizontal = 'center';

const action = () =>
	<Tooltip title="close">
		<Button
			variant="contained"
			color="success"
		><DoneIcon/> </Button>
	</Tooltip>;

const AlertMessage = (context) => {
	const { state: { Alert }} = context;

	return <div>
		<Button
			variant="contained"
			color="primary"
			onClick={ () => context.actions.addStudent(context) }
		>Save</Button>
		<Snackbar
			key={ vertical + horizontal }
			anchorOrigin={ { vertical, horizontal } }
			open={ Alert }
			autoHideDuration={ 6000 }
			onClose={ () => context.actions.editAlert() }
			message="Successfully Saved"
			action={ action() }
		/>
	</div>;
};

export default AlertMessage;
