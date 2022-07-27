import { TableCell, TextField } from '@mui/material';
import { React } from 'react';
import studentManager from '../../services/studentManager';

const MarksInput = (context) => {
	const { state: { validation }, state, actions, config } = context;

	return config.subjects.map((subject) =>
		<TableCell 	key={ subject } align="center">
			<TextField
				error={ validation[subject] }
				label={ subject.toUpperCase() }
				id={ subject }
				focused={ true }
				type="number"
				color="primary"
				value={ state[subject] }
				onChange={ (evt) => {
					actions.setMark({ [subject]: evt.target.value });
					actions.checkValidation({ [subject]: evt.target.value });
				} }
				helperText={ studentManager.errorMessage(validation[subject]) }
			/></TableCell>);
};

export default MarksInput;