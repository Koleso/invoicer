import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';
import kmFormatter from 'helpers/kmFormatter';
import NumberFormat from 'react-number-format';

// CSS
import './index.less';

class BarChart extends React.Component {
	constructor(props) {
		super(props);
		const maxValue = Math.max.apply(
			Math, props.data.map(o => { return o.amount; })
		);
		this.state = {
			colWidth: null,
			maxValue,
		};
	}

	componentDidMount() {
		this.setState({ // eslint-disable-line
			colWidth: (document.getElementById('chartArea').offsetWidth / 6),
		});
	}

	render() {
		const bm = 'BarChart';

		return (
			<div className={cx(bm, '')}>
				<div className={cx(bm, 'inner')} id="chartArea">
					<ul className={cx(bm, 'legendY')}>
						<li>{kmFormatter(this.state.maxValue)}</li>
						<li>{kmFormatter(this.state.maxValue * 2 / 3)}</li>
						<li>{kmFormatter(this.state.maxValue * 1 / 3)}</li>
						<li>0</li>
					</ul>

					<svg
						width="100%"
						height="150px"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						className={cx(bm, 'chart')}
					>
						{this.state.maxValue &&
							<g>
								{this.props.data.map((item, index) =>
									<rect
										className={cx(bm, 'bar')}
										key={index}
										x={index * this.state.colWidth + (this.state.colWidth / 2 - 9)}
										y={150 - (item.amount / (this.state.maxValue / 150))}
										height={item.amount / (this.state.maxValue / 150)}
									>
										<title>
											<NumberFormat value={item.amount} displayType={'text'} thousandSeparator={' '} />
										</title>
									</rect>
								)}
							</g>
						}
					</svg>

					<ul className={cx(bm, 'legendX')}>
						{this.props.data.map((item, index) =>
							<li key={index}>{item.month}</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

BarChart.propTypes = {
	data: T.array.isRequired,
};

export default BarChart;
