import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./createForm.css"; // Adjust the path according to your project structure

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  gender: Yup.string().required("Required"),
  relationshipStatus: Yup.string().required("Required"),
});

const CreateForm = ({ message, onSubmit }) => {
  const [sectionId, featureId, action] = message;

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        relationshipStatus: "",
      }}
      validationSchema={validationSchema}

      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values).then(() => {
          resetForm(); // Reset the form fields
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <div className="display-container">
          <Form className="form-container">
            <div className="form-header">
              <h2>
                {action} Form for Feature {featureId} of Section {sectionId}
              </h2>
            </div>
            <div className="form-field">
              <label htmlFor="firstname">First Name</label>
              <Field type="text" name="firstname" />
              <ErrorMessage
                name="firstname"
                component="div"
                className="form-error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">Last Name</label>
              <Field type="text" name="lastname" />
              <ErrorMessage
                name="lastname"
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

export default CreateForm;
