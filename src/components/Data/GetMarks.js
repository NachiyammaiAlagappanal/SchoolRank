import { TableCell, TextField } from '@mui/material';
import { React } from 'react';
import ErrorInputIndication from './ErrorInputIndication';

const GetMarks = (context) => {
	const { state: { validation }, state, actions, config } = context;

	return config.subjects.map((subject) =>
		<TableCell 	key={ subject } align="center">
			<TextField
				error={ validation[subject] }
				label={ subject }
				id={ subject }
				variant="standard"
				type="number"
				color="primary"
				value={ state[subject] }
				onChange={ (evt) => {
					actions.setMark({ [subject]: evt.target.value });
					actions.setValidation({ [subject]: evt.target.value });
				} }
			/>
			{ ErrorInputIndication(validation[subject], actions) }</TableCell>);
};

export default GetMarks;
