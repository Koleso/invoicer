import React from 'react';
import { IndexLink } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Logo extends React.Component {

  render() {
    const bm = 'Logo';

    return (
      <IndexLink to="/" className={cx(bm, '')} />
    );
  }
}
