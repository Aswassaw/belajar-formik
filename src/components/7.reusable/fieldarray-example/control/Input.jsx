import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const Input = ({ label, name, ...rest }) => {
  return (
    <div>
      {/* Label */}
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      {/* Field */}
      <Field className='form-input' id={name} name={name} {...rest} />
      {/* Error */}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
