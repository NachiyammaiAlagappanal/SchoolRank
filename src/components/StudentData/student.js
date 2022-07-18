import { React } from 'react';

const Student = (studentDetail) => {
	const { id, StudentName, english, tamil, science } = studentDetail;

	return (
		<div key={ id } className="student">
			<div>Name: { StudentName }</div>
			<div>ENGLISH: { english }</div>
			<div>TAMIL: { tamil }</div>
			<div> Science: { science }</div>
		</div>
	);
};

export default Student;
