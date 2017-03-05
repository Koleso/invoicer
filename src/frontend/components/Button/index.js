import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';


export default class Button extends React.Component {

  static propTypes = {
    children: T.node,
    href: T.any,
    to: T.any,
    modifiers: T.array,
  };

  render() {
    const bm = 'Button';
    const {
      children,
      href,
      to,
      modifiers,
      type,
      ...other,
    } = this.props;

    let BtnTag = 'button';
    if (href) {
      BtnTag = 'a';
    }

    if (to) {
      return (
        <Link
          className={cx(bm, '', modifiers)}
          to={to}
          activeClassName="isActive"
        >
          {children}
        </Link>
      );
    }

    let finalType = type;
    if (!finalType) {
      finalType = 'button';
    }

    return (
      <BtnTag
        className={cx(bm, '', modifiers)}
        {...other}
        href={href}
        type={finalType}
      >
        {children}
      </BtnTag>
    );
  }
}
