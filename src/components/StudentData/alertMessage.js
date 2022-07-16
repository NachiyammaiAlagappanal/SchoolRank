import { React } from 'react';
const AlertMessage = (context) => {
	const { state: { Alert }} = context;

	return <div>{ Alert }
	</div>;
};

export default AlertMessage;
