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
    skills: [
      {
        skillName: "",
        skillRate: 0,
      },
    ],
    favColor: "",
    favFood: [],
    birthDate: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
    description: Yup.string()
      .required("Description is required!")
      .max(100, "Description too long (max 100)!"),
    education: Yup.string().required("Education is required!"),
    skills: Yup.array().of(
      Yup.object().shape({
        skillName: Yup.string().required("Skill Name is required!"),
        skillRate: Yup.number().required("Skill Rate is required!"),
      })
    ),
    favColor: Yup.string().required("Favourite color is required!"),
    favFood: Yup.array().min(1, "Favourite food is required"),
    birthDate: Yup.date().required("Birth Date is required!").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);

    // Mengubah object date ke string
    const birthDateString = JSON.parse(JSON.stringify(values.birthDate));
    console.log(birthDateString);

    // Mengubah string date ke object
    const birthDateBack = new Date(birthDateString);
    console.log(birthDateBack);

    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
    }, 5000);
  };

  // Options for education select field
  const educationOptions = [
    {
      label: "Sekolah Dasar",
      value: "sd",
    },
    {
      label: "Sekolah Menengah Pertama",
      value: "smp",
    },
    {
      label: "Sekolah Menengah Atas",
      value: "sma",
    },
  ];

  // Options for favColor radio field
  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

  // Options for favFood checkbox filed
  const foodOptions = [
    { value: "nasiGoreng", label: "Nasi Goreng" },
    { value: "sotoAyam", label: "Soto Ayam" },
    { value: "baksoDaging", label: "Bakso Daging" },
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
              control='input-array'
              label='Skills'
              name='skills'
              attributeChild={[
                { name: "skillName", placeholder: "Skill Name", type: "text" },
                {
                  name: "skillRate",
                  placeholder: "Skill Rate",
                  type: "number",
                  max: 100,
                },
              ]}
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
            <FormikControl
              control='datepicker'
              label='Birth Date'
              name='birthDate'
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
