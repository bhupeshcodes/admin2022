import React, { useContext, useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useField, useFormikContext } from "formik";
import { TextField } from "@material-ui/core";
import { firestore } from "../../Firebase";
import { mainContext } from "../../Contexts/MainContext";

const AutocompleteWrapper = ({ name, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [options, setOptions] = useState([]);
  const { SetVinNumber } = useContext(mainContext);

  const [field, meta] = useField(name);

  const handleClick = (value) => {
    setFieldValue(name, value);
    const vinNum = [];

    firestore
      .collection("VahicleRegistration")
      .where("VinNumber", "==", value)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            vinNum.push(doc.data());
          });
          SetVinNumber(...vinNum);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const configSelect = {
    ...field,
    ...otherProps,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  useEffect(() => {
    const VahicleRegistration = [];
    setOptions([]);

    firestore
      .collection("VahicleRegistration")
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            VahicleRegistration.push(doc.data());
          });
          setOptions(VahicleRegistration);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.VinNumber}
      id="controlled-demo"
      onChange={(event, newValue) => {
        if (newValue) {
          handleClick(newValue.VinNumber);
        }
      }}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" {...configSelect} />
      )}
    />
  );
};

export default AutocompleteWrapper;
