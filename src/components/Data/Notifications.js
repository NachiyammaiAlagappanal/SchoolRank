import { React } from 'react';
import AlertMessage from './AlertMessage';
import SuccessMessage from './SuccessMessage';

const Notifications = (context) => {
	const { state: { error }} = context;

	return (
		error === false
			? <AlertMessage { ...context }/>
			:	<SuccessMessage { ...context }/>

	);
};

export default Notifications;
