import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createForm.css";

// Get today's date with time set to 00:00:00 for accurate comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

// Define maximum end date allowed
const maxEndDate = new Date('2024-12-01');

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  startDate: Yup.date()
    .required("Start date is required")
    .nullable()
    .min(today, "Start date can't be in the past"), // Start date validation
  endDate: Yup.date()
    .required("End date is required")
    .nullable()
    .min(Yup.ref('startDate'), "End date can't be before start date") // End date validation
    .max(maxEndDate, "End date can't be later than December 1, 2024"), // End date validation
});

// Initial form values
const initialValues = {
  name: "",
  startDate: "",
  endDate: "",
};

// SearchForm component
const SearchForm = ({ message }) => {
  const [sectionId, featureId, action] = message;

  // Reset form function
  const handleReset = (formikProps) => {
    formikProps.resetForm({ values: initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values); // Log form values on submit
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <div className="display-container">
          <Form className="form-container">
            <div className="form-header">
              <h2>{action} Form for Feature {featureId} of Section {sectionId}</h2>
            </div>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="form-error" />
            </div>
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>
              <Field type="date" name="startDate" min={today.toISOString().split('T')[0]} />
              <ErrorMessage name="startDate" component="div" className="form-error" />
            </div>
            <div className="form-field">
              <label htmlFor="endDate">End Date</label>
              <Field type="date" name="endDate" min={today.toISOString().split('T')[0]} max={maxEndDate.toISOString().split('T')[0]} />
              <ErrorMessage name="endDate" component="div" className="form-error" />
            </div>
            <div className="form-footer">
              <button
                type="reset" 
                onClick={() => handleReset({ resetForm })}
                disabled={isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SearchForm;
