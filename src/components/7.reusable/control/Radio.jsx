import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const Radio = ({ label, name, options, ...rest }) => {
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
                  className='radio'
                  type='radio'
                  id={key}
                  {...field}
                  value={value}
                  checked={field.value === value}
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

export default Radio;
