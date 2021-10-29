import "./FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object().shape({});
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
          <Form>
            <button className="button" type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
