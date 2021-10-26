import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      // Pastikan key sama dengan atribut name dan bukan id
      name: "",
      email: "",
      channel: "",
    },
  });
  const { name, email, channel } = formik.values;

  console.log(formik.values);

  return (
    <form className='form'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={formik.handleChange}
        value={name}
      />

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        email='email'
        id='email'
        onChange={formik.handleChange}
        value={email}
      />

      <label htmlFor='channel'>Channel</label>
      <input
        type='text'
        channel='channel'
        id='channel'
        onChange={formik.handleChange}
        value={channel}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
