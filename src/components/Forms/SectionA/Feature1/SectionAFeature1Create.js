import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createForm.css"; // Adjust the path according to your project structure

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  gender: Yup.string().required("Required"),
  relationshipStatus: Yup.string().required("Required"),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date()
    .required("Required")
    .min(
      Yup.ref("startDate"),
      "End date cannot be before start date"
    ),
});

const SectionAFeature1Create = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        gender: "",
        relationshipStatus: "",
        startDate: "",
        endDate: "",
      }}
      validationSchema={validationSchema}

      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values, { setSubmitting }).then(() => {
            resetForm();
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <div className="display-container">
          <Form className="form-container">
            <div className="form-header">
              <h2>
                Create Form for Feature 1 of Section A
              </h2>
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
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <Field type="tel" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Gender</label>
              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label>Relationship Status</label>
              <div>
                <Field type="radio" name="relationshipStatus" value="single" />
                Single
              </div>
              <div>
                <Field
                  type="radio"
                  name="relationshipStatus"
                  value="committed"
                />
                Committed
              </div>
              <ErrorMessage
                name="relationshipStatus"
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

export default SectionAFeature1Create;
