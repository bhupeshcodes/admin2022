import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "../FormComponents/TextField";
import DateTimePicker from "../FormComponents/DateTimePicker";
import Button from "../FormComponents/Button";

const ContactDetailsForm = (props) => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));

  const INITIAL_FORM_STATE = {
    mobileNumber: "",
    email: "",
    cvLinks: "",
    socialLinks: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    customerName: Yup.string()
      .matches(/^[a-z, A-Z]+$/, "Must be only text")
      .required("Required"),
    fatherName: Yup.string().matches(/^[a-z, A-Z]+$/, "Must be only text"),
    dateOfBirth: Yup.date().required("Required"),
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string(),
    state: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    pincode: Yup.string()
      .matches(/^[0-9]+$/, "Please enter a valid pincode")
      .required("Required")
      .length(6, "Must be exactly 6 digits"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Please enter a valid phone number")
      .required("Required")
      .length(10, "Must be exactly 10 digits"),
    panNumber: Yup.string()
      .length(10, "Must be exactly 10 digits")
      .required("Required"),
    aadharNumber: Yup.string()
      .matches(/^[0-9]+$/, "Please enter a Aadhar phone number")
      .length(12, "Must be exactly 12 digits"),
    saleDate: Yup.date().required("Required"),
    other: Yup.string(),
    type: Yup.string().required("Required"),
    VinNumber: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="center">
        <Box p={1} width="100%" bgcolor="white" style={{ padding: 60 }}>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4">
                      Contact Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40 }}>
                    <Typography>Personal Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="customerName" label="Customer Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="fatherName" label="Father's Name / Husband Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="dateOfBirth" label="Date Of Birth" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="mobileNumber" label="Mobile Number" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="panNumber" label="PAN Number" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="aadharNumber" label="Aadhar Number" />
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40 }}>
                    <Typography>Address Details</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine1" label="Address Line 1" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="addressLine2" label="Address Line 2" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="pincode" label="PIN Code" />
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40 }}>
                    <Typography>Sales Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="dateOfRegistration"
                      label="Date Of Registration"
                      disabled={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="saleDate" label="Sale Date" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="other" label="Other" />
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40 }}>
                    <Typography>Vahicle Details</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
};

export default ContactDetailsForm;
