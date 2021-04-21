import { useField } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import hideEyeIcon from '../../static/icons/hide_pass.svg';
import eyeIcon from '../../static/icons/show_pass.svg';
import warningIcon from '../../static/icons/warning.svg';
import styles from './Input.scss';



const Input = ({ label, name, placeholder, required = false, type, ...props }) => {
  const [field, meta] = useField(name);
  const [inputType, setInputType] = useState(type);

  return (
    <label className={styles.label} data-input-type={type}>
      <span className={styles.labelText} data-required={required}>{label}</span>
      <fieldset>
        <div className={styles.icons}>
          {type === 'password' && (
            <button
              aria-label="Show or hide password"
              className={styles.showPasswordButton}
              onClick={() => setInputType(inputType === 'text' ? 'password' : 'text')}
              type="button"
            >
              {
                inputType === 'text' ?
                  <img alt="" src={hideEyeIcon} /> :
                  <img alt="" src={eyeIcon} />
              }
            </button>
          )}
          {meta.touched && meta.error && <img alt="" className={styles.warningIcon} src={warningIcon} />}
        </div>
        <input
          data-invalid={Boolean(meta.touched && meta.error)}
          placeholder={placeholder}
          required={required}
          type={inputType}
          {...field}
          {...props}
        />
      </fieldset>
      {meta.touched && meta.error && <span className={styles.errorMessage}>{meta.error}</span>}
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default Input;
