import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';


export default class Input extends React.Component {

  static propTypes = {
    label: T.string,
    input: T.object,
    placeholder: T.string,
    multiline: T.bool,
    disabled: T.bool,
    autoFocus: T.bool,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const bm = 'Input';
    const {
      input,
      label,
      disabled,
      placeholder,
      multiline,
      modifiers,
      type,
      autoFocus,
      autoComplete,
    } = this.props;

    let InputElement = 'input';
    if (multiline) {
      InputElement = 'textarea';
    }

    return (
      <div className={cx(bm, '', modifiers)}>
        <label className={cx(bm, 'label')}>{label}</label>
        <InputElement
          className={cx(bm, 'input')}
          {...input}
          autoComplete={autoComplete}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          autoFocus={autoFocus}
        />
      </div>
    );
  }
}
