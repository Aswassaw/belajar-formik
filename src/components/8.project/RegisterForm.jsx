import "../7.reusable/FormikContainer.css";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../7.reusable/FormikControl";

const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is not valid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password too sort (min 8)!"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password is not match"
    ),
    modeOfContact: Yup.string().required("Mode Of Contact is required!"),
    phone: Yup.number().when("modeOfContact", {
      is: "Phone",
      then: Yup.number().required("Phone is required!"),
    }),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);

    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
    }, 5000);
  };

  const modeOfContactOptions = [
    { key: "mode-email", value: "Email" },
    { key: "mode-phone", value: "Phone" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(formik) => {
        return (
          <Form className='form'>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
            <FormikControl
              control='radio'
              label='Mode Of Contact'
              name='modeOfContact'
              options={modeOfContactOptions}
            />
            <FormikControl
              control='input'
              type='number'
              label='Phone'
              name='phone'
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

export default RegisterForm;
