import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const Checkbox = ({ label, name, options, ...rest }) => {
  return (
    <div>
      {/* Label */}
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      {/* Field */}
      <Field className='form-input' id={name} name={name} {...rest}>
        {/* Options */}
        {({ field }) => {
          return options.map(({ key, value, text }) => {
            return (
              <Fragment key={key}>
                <input
                  className='checkbox'
                  type='checkbox'
                  id={key}
                  {...field}
                  value={value}
                  checked={field.value.includes(value)}
                />
                <label htmlFor={key}>{text || value}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      {/* Error */}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;