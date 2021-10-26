import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  // Pastikan key sama dengan atribut name dan bukan id
  name: "",
  email: "",
  channel: "",
  description: "",
  address: "",
};

// Validate with yup package
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email is not valid!"),
  channel: Yup.string().required("Channel is required!"),
  description: Yup.string().max(150, "Description too long (max 150)!"),
  address: Yup.string().required("Address is required!"),
});

const onSubmit = (values) => {
  // e.preventDefault sudah otomatis diatasi oleh formik
  console.log(values);
};

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='form'>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' id='name' />
          <div className='error-msg'>
            <ErrorMessage name='name' />
          </div>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <Field type='email' name='email' id='email' />
          <div className='error-msg'>
            <ErrorMessage name='email' />
          </div>
        </div>

        <div>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' name='channel' id='channel' />
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
          <Field name='address'>
            {({ field, form, meta }) => (
              <>
                <input type='text' id='address' {...field} />
                {meta.touched && meta.error && (
                  <div className='error-msg'>{meta.error}</div>
                )}
              </>
            )}
          </Field>
          {/* <div className='error-msg'>
            <ErrorMessage name='address' />
          </div> */}
        </div>

        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
