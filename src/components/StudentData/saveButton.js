import { React } from 'react';

const SaveButton = (context) =>
	<button onClick={ () => context.actions.addStudent() }>
		Save
	</button>;

export default SaveButton;
