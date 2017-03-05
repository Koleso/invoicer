import React, { PropTypes as T } from 'react';
import { Link as ReactLink } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Link extends React.Component {

  static propTypes = {
    to: T.any,
    children: T.node,
    modifiers: T.array
  };

  render() {
    const bm = 'Link';
    const {
      to,
      children,
      modifiers,
      ...otherProps,
      } = this.props;

    return (
      <ReactLink
        className={cx(bm, '', modifiers)}
        to={to}
        activeClassName="isActive"
        {...otherProps}
      >
        {children}
      </ReactLink>
    );
  }
}
