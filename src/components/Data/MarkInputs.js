import { TableCell, TextField } from '@mui/material';
import { React } from 'react';
import studentManager from '../../services/studentManager';
import ErrorInputIndication from './InputErrorIndication';

const MarkInput = (context) => {
	const { state: { inputs }, actions, data: subject } = context;
	const errorStatus = !studentManager.isMarkValid(inputs[subject]);

	return <TableCell key={ subject } align="center">
		<TextField
			error={ errorStatus }
			label={ subject }
			id={ subject }
			variant="standard"
			type="number"
			color="primary"
			value={ inputs[subject] }
			onChange={ (evt) => {
				actions.setInputs({ [subject]: evt.target.value });
			} }
		/>
		{ErrorInputIndication(errorStatus, actions)}</TableCell>;
};

const MarkInputs = (context) => {
	const { config } = context;

	return config.subjects.map((subject) => MarkInput({ ...context,
		data: subject }));
};

export default MarkInputs;
