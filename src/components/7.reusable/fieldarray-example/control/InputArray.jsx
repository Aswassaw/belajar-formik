import React, { Fragment } from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import TextError from "./error/TextError";

const InputArray = ({ label, name, attributeChild, ...rest }) => {
  return (
    <div>
      {/* Label */}
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      {/* Field Array */}
      <FieldArray name={name} id={name}>
        {({ push, remove, form: { values, errors } }) => {
          return (
            <>
              {values[name].map((value, index) => {
                return attributeChild.map((attrC, indexC) => {
                  const { name: attrCName, ...attrCRest } = attrC;
                  return (
                    <Fragment key={nanoid()}>
                      <div className='flex'>
                        {/* Field */}
                        <Field
                          className='form-input mb-5'
                          name={`${name}.${index}.${attrCName}`}
                          {...attrCRest}
                        />
                        {indexC === 0 && (
                          <>
                            {index === 0 && (
                              <button
                                className='button-array'
                                type='button'
                                onClick={() => push("")}
                              >
                                +
                              </button>
                            )}
                            {values[name].length > 1 && (
                              <button
                                className='button-array'
                                type='button'
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                          </>
                        )}
                      </div>
                      {/* Error */}
                      <ErrorMessage
                        name={`${name}.${index}.${attrCName}`}
                        component={TextError}
                      />
                    </Fragment>
                  );
                });
              })}
            </>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default InputArray;
