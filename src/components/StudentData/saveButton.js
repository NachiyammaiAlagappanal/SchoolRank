import { React } from 'react';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';

const SaveButton = (context) =>

	<TableCell>
		<Button
			variant="contained"
			color="primary"
			onClick={ () => {
				context.actions.getAlert(context);
				context.actions.addStudent(context);
			} }
			size="large"
		>Save</Button>
	</TableCell>;

export default SaveButton;
