import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import TextError from "./error/TextError";

const InputArray = ({ label, name, ...rest }) => {
  return (
    <div>
      {/* Label */}
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      {/* Field Array */}
      <FieldArray name={name} id={name}>
        {({
          push,
          remove,
          form: {
            values: { skills },
            errors,
          },
        }) => {
          return (
            <>
              {skills.map((skill, index) => (
                <div className='flex' key={index}>
                  {/* Field */}
                  <Field
                    className='form-input mb-5'
                    name={`skills.${index}.skillName`}
                    {...rest}
                  />
                  {index === 0 && (
                    <button
                      className='button-array'
                      type='button'
                      onClick={() => push("")}
                    >
                      +
                    </button>
                  )}
                  {skills.length > 1 && (
                    <button
                      className='button-array'
                      type='button'
                      onClick={() => remove(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </>
          );
        }}
      </FieldArray>
      {/* Error */}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputArray;
