import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    // Pastikan key sama dengan atribut name dan bukan id
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    // onSubmit akan menerima values terbaru sebagai parameter pertamanya.
    onSubmit: (values) => {
      // e.preventDefault sudah otomatis diatasi oleh formik.
      console.log(values);
    },
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
      <button type="reset" onClick={formik.handleReset}>Reset</button>
    </form>
  );
};

export default YoutubeForm;
