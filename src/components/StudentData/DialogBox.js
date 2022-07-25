import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import { Dialog, List } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { React } from 'react';

const message = (row) => values(map(row, (value, key) => <List key={ key }>
	{ `${ key.toUpperCase() }: ${ value }` }</List>));

const DialogBox = (context) => {
	const { state: { selected, row }} = context;

	return <div>
		<Dialog
			open={ selected }
			onClose={ () =>
				context.actions.handleClose() }
		>
			<DialogTitle>
				{message(row)}</DialogTitle>
		</Dialog>
	</div>;
};

export default DialogBox;
