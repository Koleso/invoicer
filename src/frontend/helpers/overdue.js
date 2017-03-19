import React from 'react';

const dueDate = (date, due) => {
	return new Date(+new Date(date) + due * (1000 * 3600 * 24));
};

const overdue = (date, due) => {
	return parseInt((new Date() - dueDate(date, due)) / (1000 * 60 * 60 * 24), 10);
};

export { overdue, dueDate };
