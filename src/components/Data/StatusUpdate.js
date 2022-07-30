import { React } from 'react';
import AlertMessage from './AlertMessage';
import SuccessMessage from './SuccessMessage';

const StatusUpdate = (context) => {
	const { state: { error }} = context;

	return (
		error === false
			? <AlertMessage { ...context }/>
			:	<SuccessMessage { ...context }/>

	);
};

export default StatusUpdate;
