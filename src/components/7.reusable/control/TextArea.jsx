import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const TextArea = ({ label, name, ...rest }) => {
  return (
    <div>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <Field
        className='form-input'
        id={name}
        name={name}
        {...rest}
        as='textarea'
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
