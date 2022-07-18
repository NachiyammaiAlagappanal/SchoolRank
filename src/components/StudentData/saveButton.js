/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Button from '@mui/material/Button';
import AlertMessage from './alertMessage';

const SaveButton = (context) =>

	<div>
		<Button
			variant="contained"
			color="primary"
			onClick={ () => {
				context.actions.addStudent(context);
				context.actions.getAlert(context);
			} }
		>Save</Button>
		{ AlertMessage(context)}
	</div>;

export default SaveButton;
