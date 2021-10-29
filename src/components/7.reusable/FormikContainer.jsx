import "./FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    favColor: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
    description: Yup.string()
      .required("Description is required!")
      .max(100, "Description too long (max 100)!"),
    education: Yup.string().required("Education is required!"),
    favColor: Yup.string().required("Favourite Color is required!"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);

    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
    }, 5000);
  };

  // Options for education select field
  const educationOptions = [
    {
      key: "sekolah-dasar",
      value: "Sekolah Dasar",
      text: "SD (Sekolah Dasar)",
    },
    {
      key: "sekolah-menengah-pertama",
      value: "Sekolah Menengah Pertama",
      text: "SMP (Sekolah Menengah Pertama)",
    },
    {
      key: "sekolah-menengah-atas",
      value: "Sekolah Menengah Atas",
      text: "SMA (Sekolah Menengah Atas)",
    },
  ];

  // Options for isMarried select field
  const colorOptions = [
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" },
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
            <FormikControl
              control='radio'
              label='Favourite Color'
              name='favColor'
              options={colorOptions}
            />

            <button
              className={`button ${
                !formik.isValid || formik.isSubmitting ? "disabled" : ""
              }`}
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting ? true : false}
            >
              {!formik.isSubmitting ? "Submit" : "Processing..."}
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

export default FormikContainer;
