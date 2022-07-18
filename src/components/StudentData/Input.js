import { React } from 'react';
const MarksInput = ({ state, actions, config }) =>
	config.subjects.map((subject) =>
		<span key={ subject }><label>{subject.toUpperCase()}
			<input
				id={ subject }
				className="text-box"
				type="number"
				value={ state[subject] }
				onChange={ (evt) =>
					actions.setMark({ [subject]: evt.target.value }) }
			/>
		</label><br/></span>);

const Inputs = (context) => {
	const { state } = context;

	return (
		<div>
			<label>STUDENT NAME:{}
				<input
					className="text-box"
					id="name"
					type="text"
					value={ state.name }
					onChange={ (evt) =>
						context.actions.setStudentName(evt.target.value) }
				/></label>
			<div>Marks Scored{}</div>
			{MarksInput(context)}
		</div>);
};

export default Inputs;
