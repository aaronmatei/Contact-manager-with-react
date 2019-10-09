import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};
TextInputGroup.propType = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
// eslint-disable-next-line react/no-typos
TextInputGroup.defaultprops = {
  type: 'text'
};

export default TextInputGroup;
