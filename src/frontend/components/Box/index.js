import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';


export default class Box extends React.Component {

  static propTypes = {
    children: T.node.isRequired,
    title: T.string,
    modifiers: T.array,
  };

  render() {
    const bm = 'Box';
    const {
      children,
      title,
      modifiers,
    } = this.props;

    let boxTitle = '';
    if(title) {
      boxTitle = (
        <div className={cx(bm, 'title')}>
          <h2>{title}</h2>
        </div>
      );
    }


    return (
      <div className={cx(bm, '', modifiers)}>
        {boxTitle}
        <div className={cx(bm, 'content')}>
          {children}
        </div>
      </div>
    );
  }
}
