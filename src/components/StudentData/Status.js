import AlertBox from './AlertBox';
import snackBar from './snackBar';

const Status = (context) => {
	const { state: { error }, actions } = context;

	return (
		error === false
			? AlertBox(context)
			:	snackBar(error, actions)

	);
};

export default Status;
