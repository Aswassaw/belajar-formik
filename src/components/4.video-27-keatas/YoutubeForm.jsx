import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  // Pastikan key sama dengan atribut name dan bukan id
  name: "",
  email: "",
  channel: "",
  description: "",
  address: "",
  skills: [""],
  social: {
    facebook: "",
    twitter: "",
  },
  phone: ["", ""],
};

// Validate with yup package
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email is not valid!"),
  description: Yup.string().max(150, "Description too long (max 150)!"),
  address: Yup.string().required("Address is required!"),
  social: Yup.object({
    facebook: Yup.string().url("Facebook is not valid url!"),
    twitter: Yup.string().url("Twitter is not valid url!"),
  }),
});

// Manual validate for channel
const validateChannel = (value) => {
  let error = null;
  if (!value) {
    error = "Channel is required!";
  }
  return error;
};

const onSubmit = (values) => {
  // e.preventDefault sudah otomatis diatasi oleh formik
  console.log(values);
};

const YoutubeForm = () => {
  const [social, setSocial] = useState(false);
  const [phone, setPhone] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        console.log(formik);

        return (
          <Form className='form'>
            <div>
              <label htmlFor='name'>Name</label>
              <Field type='text' name='name' id='name' />
              <ErrorMessage
                name='name'
                component={TextError}
                placeholder='Input name'
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <Field type='email' name='email' id='email' />
              <ErrorMessage name='email'>
                {(errorMsg) => <div className='error-msg'>{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div>
              <label htmlFor='channel'>Channel</label>
              <Field
                type='text'
                name='channel'
                id='channel'
                validate={validateChannel}
              />
              <div className='error-msg'>
                <ErrorMessage name='channel' />
              </div>
            </div>

            <div>
              <label htmlFor='description'>Description</label>
              <Field as='textarea' name='description' id='description' />
              <div className='error-msg'>
                <ErrorMessage name='description' />
              </div>
            </div>

            <div>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {({ field, form, meta }) => {
                  return (
                    <>
                      <input type='text' id='address' {...field} />
                      {meta.touched && meta.error && (
                        <div className='error-msg'>{meta.error}</div>
                      )}
                    </>
                  );
                }}
              </FastField>
            </div>

            <div>
              <label htmlFor='skills'>Skills</label>
              <FieldArray type='text' name='skills' id='skills'>
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
                        <div className='flex-arr' key={index}>
                          <Field
                            className='input-arr'
                            name={`skills[${index}]`}
                          />
                          {index === 0 && (
                            <button
                              className='btn-arr'
                              type='button'
                              onClick={() => push("")}
                            >
                              +
                            </button>
                          )}
                          {skills.length > 1 && (
                            <button
                              className='btn-arr'
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
              <ErrorMessage
                name='skills'
                component={TextError}
                placeholder='Input skills'
              />
            </div>

            <button
              className='button'
              type='button'
              onClick={() => setSocial((e) => !e)}
            >
              {!social ? "Add Social" : "Close"}
            </button>
            <br />

            {social && (
              <>
                <div>
                  <label htmlFor='facebook'>Facebook</label>
                  <Field type='text' name='social.facebook' id='facebook' />
                  <ErrorMessage name='social.facebook' component={TextError} />
                </div>
                <div>
                  <label htmlFor='twitter'>Twitter</label>
                  <Field type='text' name='social.twitter' id='twitter' />
                  <ErrorMessage name='social.twitter' component={TextError} />
                </div>
              </>
            )}

            <button
              className='button'
              type='button'
              onClick={() => setPhone((e) => !e)}
            >
              {!phone ? "Add Phone" : "Close"}
            </button>
            <br />

            {phone && (
              <>
                <div>
                  <label htmlFor='phone1'>Phone 1</label>
                  <Field type='number' name='phone[0]' id='phone1' />
                  <ErrorMessage name='phone[0]' component={TextError} />
                </div>
                <div>
                  <label htmlFor='phone2'>Phone 2</label>
                  <Field type='number' name='phone[1]' id='phone2' />
                  <ErrorMessage name='phone[1]' component={TextError} />
                </div>
              </>
            )}

            <button
              className='button'
              type='button'
              onClick={() => formik.validateField("channel")}
            >
              Validate Channel
            </button>
            <button
              className='button'
              type='button'
              onClick={() => formik.validateForm()}
            >
              Validate All
            </button>
            <br />

            <button
              className='button'
              type='button'
              onClick={() => formik.setFieldTouched("channel")}
            >
              Touch Channel
            </button>
            <button
              className='button'
              type='button'
              onClick={() =>
                formik.setTouched({
                  ...formik.touched,
                  name: true,
                  email: true,
                })
              }
            >
              Touch Multiple Field
            </button>
            <br />

            <button
              className={`button ${!formik.isValid && "disabled"}`}
              type='submit'
              disabled={!formik.isValid}
            >
              Submit
            </button>
            <button className='button' type='reset'>
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;

// Button disabled dengan formik.dirty
// eslint-disable-next-line no-lone-blocks
{
  /* <button
  className={`button ${
    !formik.isValid || !formik.dirty ? "disabled" : ""
  }`}
  type='submit'
  disabled={!(formik.dirty && formik.isValid)}
>
  Submit
</button> */
}
