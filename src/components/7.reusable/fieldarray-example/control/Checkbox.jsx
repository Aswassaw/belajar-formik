import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
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
          return options.map(({ label, value }) => {
            return (
              <Fragment key={nanoid()}>
                <input
                  className='checkbox'
                  type='checkbox'
                  id={value}
                  {...field}
                  value={value}
                  checked={field.value.includes(value)}
                />
                <label htmlFor={value}>{label}</label>
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
