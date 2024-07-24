import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createForm.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  startDate: Yup.date().required("Start date is required").nullable(), // Start date validation
  endDate: Yup.date()
    .required("End date is required")
    .nullable()
    .min(Yup.ref("startDate"), "End date can't be before start date"), // End date validation
});

// Initial form values
const initialValues = {
  name: "",
  startDate: "",
  endDate: "",
};

// SearchForm component
const SectionAFeature1Search = ({ onSearch, onReset }) => {
  // Reset form function
  const handleReset = (formikProps) => {
    formikProps.resetForm({ values: initialValues });
    onReset(); // Call onReset callback
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSearch(values); // Call the onSearch function with form values
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <div className="display-container">
          <Form className="form-container">
            <div className="form-header">
              <h2>Search Form for Feature 1 of Section A</h2>
            </div>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>
              <Field type="date" name="startDate" />
              <ErrorMessage
                name="startDate"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="endDate">End Date</label>
              <Field type="date" name="endDate" />
              <ErrorMessage
                name="endDate"
                component="div"
                className="form-error"
              />
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

export default SectionAFeature1Search;
