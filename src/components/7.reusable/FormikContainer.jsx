import "./FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
    description: Yup.string()
      .required("Description is required!")
      .max(100, "Description too long (max 100)!"),
    education: Yup.string().required("Education is required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  // Options for education select field
  const educationOptions = [
    { value: "", text: "Select an option" },
    { value: "Sekolah Dasar", text: "Sekolah Dasar" },
    { value: "Sekolah Menengah Pertama", text: "Sekolah Menengah Pertama" },
    { value: "Sekolah Menengah Atas", text: "Sekolah Menengah Atas" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className='form'>
            <FormikControl
              control='input'
              label='Email'
              name='email'
              type='email'
            />
            <FormikControl
              control='textarea'
              label='Description'
              name='description'
            />
            <FormikControl
              control='select'
              label='Education'
              name='education'
              options={educationOptions}
            />
            <button className='button' type='submit'>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
