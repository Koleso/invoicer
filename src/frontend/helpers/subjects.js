const subjectById = (subjects, id) => {
	return subjects[subjects.findIndex((obj => obj.id === id))];
};

const subjectNameById = (subjects, id) => {
	return subjectById(subjects, id).name;
};

const subjectsForDropdown = (subjects) => {
	const array = [];

	subjects.map(subject =>
		array.push({
			key: subject.id,
			label: `${subject.name} (IČ: ${subject.ic} )`,
		})
	);

	return array;
};

export { subjectById, subjectNameById, subjectsForDropdown };
