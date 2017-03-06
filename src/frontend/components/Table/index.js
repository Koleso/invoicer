import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Table extends React.Component {

	static propTypes = {
		header: T.bool,
		columns: T.array,
		data: T.array.isRequired,
		modifiers: T.array,
	};

	render() {
		const bm = 'Table';
		const {
			header = false,
			columns,
			data,
			modifiers,
		} = this.props;

		let tableHeader = '';
		if (header) {
			const headerItems = columns.map((value) =>
				<th className={cx(bm, 'th')}>{value}</th>
			);
			tableHeader = (
				<thead className={cx(bm, 'thead')}>
					<tr className={cx(bm, 'tr')}>{headerItems}</tr>
				</thead>
			);
		}

		let tableRows = [];
		data.map((row) => {
			let rowItems = [];
			for (const key of Object.keys(row)) {
				rowItems.push(<td className={cx(bm, 'td')}>{row[key]}</td>);
			}
			tableRows.push(<tr className={cx(bm, 'tr')}>{rowItems}</tr>)
		})

		return (
			<table className={cx(bm, '', modifiers)}>
				{tableHeader}
				<tbody className={cx(bm, 'tbody')}>
					{tableRows}
				</tbody>
			</table>
		);
	}
}
