import React from 'react';
import TableCell from 'components/TableCell';
import dateFormat from 'dateformat';

const overdue = (date, due) => {
	const today = new Date();
	const dueDate = new Date(+new Date(date) + due*(1000*3600*24));
	const diff = parseInt((today-dueDate) / (1000 * 60 * 60 * 24)); 

	let over = false;
	if (diff > 0) {
		over = true;
	}

	let overdueDate = '';
	if (over) {
		let day;
		switch (diff) {
			case 1: {
				day = "den";
			}
			case 2: {
				day = "dny";
			}
			default: {
				day = "dní";
			}
		}

		overdueDate = (<div className="TableCell--secondary">{diff} {day} po splatnosti</div>);
	}

	return (
		<TableCell modifiers={[over && 'overdue']}>
			<div className="TableCell--primary">{dateFormat(dueDate, "dd. mm. yyyy")}</div>
			{overdueDate}
		</TableCell>
	);
};

export default overdue;
