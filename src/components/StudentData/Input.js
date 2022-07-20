import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

const MarksInput = ({ state, actions, config }) =>
	config.subjects.map((subject) =>
		<Box key={ subject }>
			<TextField
				label={ subject.toUpperCase() }
				id={ subject }
				className="text-box"
				type="number"
				value={ state[subject] }
				onChange={ (evt) =>
					actions.setMark({ [subject]: evt.target.value }) }
			/>
		</Box>);

const Inputs = (context) => {
	const { state } = context;

	return (
		<Box>
			<TextField
				label="StudentName"
				id="name"
				type="text"
				value={ state.name }
				onChange={ (evt) =>
					context.actions.setStudentName(evt.target.value) }
			/>
			{MarksInput(context)}
		</Box>);
};

export default Inputs;
