import AlertBox from './AlertBox';
import snackBar from './snackBar';

const Message = (context) => {
	const { state: { error }, actions } = context;

	return (
		error === false
			? AlertBox(context)
			:	snackBar(error, actions)

	);
};

export default Message;
