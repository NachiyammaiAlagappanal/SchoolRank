import { React } from 'react';
import { Alert, Collapse, Stack } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Message = (context) =>
	<Alert
		action={
			<IconButton
				aria-label="close"
				color="inherit"
				size="small"
				onClick={ () => {
					context.actions.close(false);
				} }
			>
				<CloseIcon fontSize="inherit"/>
			</IconButton>
		}
		severity="error"
	>
		<AlertTitle>Error</AlertTitle>
		Invalid Input — <strong>check it out!</strong>
	</Alert>;

const AlertBox = (context) => {
	const { state: { close }} = context;

	return (
		<Stack
			sx={ { width: '40%', margin: 'auto' } }
			spacing={ 2 }
		>
			<Collapse in={ close }>{Message(context)}</Collapse>
		</Stack>);
};

export default AlertBox;
