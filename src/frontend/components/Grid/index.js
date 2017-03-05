import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';


export default class Grid extends React.Component {

  static propTypes = {
    children: T.node,
  };

  render() {
    const bm = 'Grid';
    const {
      children,
      size,
    } = this.props;

    let gridSize = 'twoColumn';
    if (size === '3') {
      gridSize = 'threeColumn';
    }

    return (
      <div className={cx(bm, '', [gridSize])}>
        {children}
      </div>
    );
  }
}

export class GridColumn extends React.Component {

  static propTypes = {
    children: T.node,
  };

  render() {
    const bm = 'GridColumn';
    const {
      children,
    } = this.props;

    return (
      <div className={cx(bm, '')}>
        {children}
      </div>
    );
  }
}
