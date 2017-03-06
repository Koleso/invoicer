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
    modifiers: T.array,
  };

  render() {
    const bm = 'Header';
    const {
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
