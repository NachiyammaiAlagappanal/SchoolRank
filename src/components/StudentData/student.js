import { React } from 'react';

const Student = (studentDetail) => {
	const { id, StudentName, ENGLISH, TAMIL, SCIENCE } = studentDetail;

	return (
		<div key={ id } className="student">
			<div>Name: { StudentName }</div>
			<div>English: { ENGLISH }</div>
			<div>Tamil: { TAMIL }</div>
			<div> Science: { SCIENCE }</div>
		</div>
	);
};

export default Student;
