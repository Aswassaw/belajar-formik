import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div>
      {/* Label */}
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      {/* Field */}
      <Field className='form-input' id={name} name={name} {...rest} as='select'>
        {/* Options */}
        <option value=''>Select an option</option>
        {options.map(({ key, value, text }) => {
          return (
            <option key={key} value={value}>
              {text || value}
            </option>
          );
        })}
      </Field>
      {/* Error */}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
