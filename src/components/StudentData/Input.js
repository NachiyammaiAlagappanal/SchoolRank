/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

import { React } from 'react';

const Inputs = (context) => {
	const { state, config } = context;
	const { subjects } = config;

	return (
		<div>
			<label>Student Name:{}
				<input
					className="text-box"
					id="name"
					type="text"
					value={ state.name }
					onChange={ (evt) =>
						context.actions.setStudentName(evt.target.value) }
				/></label>
			<div>Marks Scored{}</div>
			{
				subjects.map((subject) =>
					<span key={ subject }><label>{subject}
						<input
							id={ subject }
							className="text-box"
							type="number"
							value={ state[subject] }
							onChange={ (evt) =>
								context.actions.setMark({ [subject]: evt.target.value }) }
						/>
					</label><br/></span>)
			}
		</div>);
};

export default Inputs;
