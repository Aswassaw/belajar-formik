import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  // Pastikan key sama dengan atribut name dan bukan id
  name: "",
  email: "",
  channel: "",
};

// Validate with yup package
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email is not valid!"),
  channel: Yup.string().required("Channel is required!"),
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

        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
