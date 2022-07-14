/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

import { React } from 'react';

const Inputs = (context) => {
	const { state, config, patchState } = context;
	const { subjects } = config;

	console.log(state);
	return (
		<div>
			<label>Student Name:{}
				<input
					className="text-box"
					id="name"
					type="text"
					value={ state.subject }
					onChange={ (evt) => context.actions.setStudentName(evt.target.value) }
				/></label>
			<div>Marks Scored{}</div>
			{
				subjects.map((subject) =>
					<span key={ subject }><label>{subject}
						<input
							id={ subject }
							className="text-box"
							type="text"
							value={ state[subject] }
							onChange={ (evt) => patchState({ [subject]: evt.target.value }) }
						/>
					</label><br/></span>)
			}
			<button onClick={ () => context.actions.addStudent() }>
				Save
			</button>
		</div>);
};

export default Inputs;
