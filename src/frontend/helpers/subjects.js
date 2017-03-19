const subjectNameById = (subjects, id) => {
	return subjects[subjects.findIndex((obj => obj.id === id))];
};

export { subjectNameById };
