import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  // Pastikan key sama dengan atribut name dan bukan id
  name: "",
  email: "",
  channel: "",
};

// Validate with yup package
const onSubmit = (values) => {
  // e.preventDefault sudah otomatis diatasi oleh formik.
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email is not valid!"),
  channel: Yup.string().required("Channel is required!"),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name && (
        <div className='error-msg'>{formik.errors.name}</div>
      )}

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        email='email'
        id='email'
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email && (
        <div className='error-msg'>{formik.errors.email}</div>
      )}

      <label htmlFor='channel'>Channel</label>
      <input
        type='text'
        channel='channel'
        id='channel'
        {...formik.getFieldProps("channel")}
      />
      {formik.touched.channel && formik.errors.channel && (
        <div className='error-msg'>{formik.errors.channel}</div>
      )}

      <button type='submit'>Submit</button>
      <button type='reset' onClick={formik.handleReset}>
        Reset
      </button>
    </form>
  );
};

export default YoutubeForm;
