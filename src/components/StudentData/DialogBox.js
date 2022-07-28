import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import { Dialog, Grid, List } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { React } from 'react';
import BarChart from './BarChart';

const PopUpBox = (row) => values(map(row, (value, key) =>
	<List
		key={ key }
		sx={ { pt: 0 } }
	>{ `${ key.toUpperCase() }: ${ value }` }</List>));

const DialogBox = (context) => {
	const { state: { selected, row }} = context;

	return <div>
		<Dialog
			open={ selected }
			onClose={ () =>
				context.actions.handleClose() }
		>
			<Grid container={ true }>
				<DialogTitle>{PopUpBox(row)}</DialogTitle>
				<DialogTitle><BarChart { ...context }/></DialogTitle>
			</Grid>
		</Dialog>
	</div>;
};

export default DialogBox;
