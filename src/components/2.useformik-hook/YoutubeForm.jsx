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

// Manual validate
// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Name tidak boleh kosong kawan!";
//   }

//   if (!values.email) {
//     errors.email = "Email tidak boleh kosong kawan!";
//   } else if (
//     !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
//       values.email
//     )
//   ) {
//     errors.email = "Email anda tidak valid!";
//   }

//   if (!values.channel) {
//     errors.channel = "Channel tidak boleh kosong kawan!";
//   }

//   return errors;
// };

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
    // validate,
    validationSchema,
  });
  const { name, email, channel } = formik.values;

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={name}
      />
      {formik.touched.name && formik.errors.name && (
        <div className='error-msg'>{formik.errors.name}</div>
      )}

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={email}
      />
      {formik.touched.email && formik.errors.email && (
        <div className='error-msg'>{formik.errors.email}</div>
      )}

      <label htmlFor='channel'>Channel</label>
      <input
        type='text'
        name='channel'
        id='channel'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={channel}
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
