const subjectById = (subjects, id) => {
	return subjects[subjects.findIndex((obj => obj.id === id))];
};

const subjectNameById = (subjects, id) => {
	return subjectById(subjects, id).name;
};

export { subjectById, subjectNameById };
