import "./FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

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
