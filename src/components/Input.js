import { React } from 'react';

const getInputMark = (context) => {
	const { state, patchState, config } = context;
	const { subjects } = config;

	return subjects.map((subject) =>
		<span key={ subject }><label>{subject}
			<input
				id={ subject }
				className="text-box"
				type="text"
				value={ state[subject] }
				onChange={ (evt) =>
					patchState({ [subject]: evt.target.value }) }
			/>
		</label><br/></span>);
};

const SaveButton = (context) =>
	<button onClick={ () => context.actions.addStudent() }>
		Save
	</button>;

const Inputs = (context) => {
	const { state, actions } = context;

	return (
		<div>
			<label>Student Name:{}
				<input
					className="text-box"
					id="name"
					type="text"
					value={ state.subject }
					onChange={ (evt) => actions
						.setStudentName(evt.target.value) }
				/></label>
			<div>Marks Scored{}</div>
			{getInputMark(context)}
			{SaveButton(context)}

		</div>);
};

export default Inputs;
