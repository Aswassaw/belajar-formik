import React from "react";
import { Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
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
        {options.map(({ label, value }) => {
          return (
            <option key={nanoid()} value={value}>
              {label}
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
