import "./FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    education: "",
    favColor: "",
    favFood: [],
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
    description: Yup.string()
      .required("Description is required!")
      .max(100, "Description too long (max 100)!"),
    education: Yup.string().required("Education is required!"),
    favColor: Yup.string().required("Favourite color is required!"),
    favFood: Yup.array().min(1, "Favourite food is required"),
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

  // Options for favColor radio field
  const colorOptions = [
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" },
  ];

  // Options for favFood checkbox filed
  const foodOptions = [
    { key: "nasi-goreng", value: "Nasi Goreng" },
    { key: "soto-ayam", value: "Soto Ayam" },
    { key: "bakso-daging", value: "Bakso Daging" },
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
              label='Favourite color'
              name='favColor'
              options={colorOptions}
            />
            <FormikControl
              control='checkbox'
              label='Favourite food'
              name='favFood'
              options={foodOptions}
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
