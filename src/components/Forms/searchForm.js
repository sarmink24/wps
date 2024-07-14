import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createForm.css"; // Adjust the path according to your project structure

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  startDate: Yup.date().required("Start date is required").nullable(),
  endDate: Yup.date()
    .required("End date is required")
    .nullable()
    .min(Yup.ref('startDate'), "End date can't be before start date"),
});

const SearchForm = ({ message }) => {
  const [sectionId, featureId, action] = message;

  return (
    <Formik
      initialValues={{
        name: "",
        startDate: null,
        endDate: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
                onClick={() => resetForm()}
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
