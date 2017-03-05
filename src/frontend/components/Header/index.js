import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// Component
import Wrap from 'components/Wrap';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

// CSS
import './index.less';


export default class Header extends React.Component {

  static propTypes = {
    children: T.node,
    modifiers: T.array,
  };

  render() {
    const bm = 'Header';
    const {
      children,
      modifiers,
    } = this.props;

    return (
      <div
        className={cx(bm, '', modifiers)}
      >
        <Wrap>
          <Logo />
          <Navigation />
        </Wrap>
      </div>
    );
  }
}
