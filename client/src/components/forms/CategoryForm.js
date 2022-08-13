// material-ui
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useMutation, useQueryClient } from "react-query";

import Page from "../Page";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadingButton } from "@mui/lab";

import categoryInstance from "src/axios/categoryInstance";

// -------------------------------Style Components-----------------------------------

const PageWrapper = styled(Page)(({ theme }) => ({
  padding: "1rem",
}));

// -----------------------------------------------------------------------------------

const CategoryForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleAddCategory = useMutation(
    async (values) => {
      console.log(values);
      await categoryInstance.post("/add-category", {
        name: values.name,
      });
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("categories");
        navigate("/dashboard/categories");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <PageWrapper title="Categories">
      <Box marginBottom={3}>
        <Typography variant="h4" gutterBottom>
          Add Category
        </Typography>
      </Box>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required("Name is required"),
        })}
        enableReinitialize={true}
        onSubmit={(values) => handleAddCategory.mutate(values)}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                >
                  <InputLabel htmlFor="category-name">Name</InputLabel>
                  <OutlinedInput
                    id="category-name"
                    type="text"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Name"
                    inputProps={{}}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.name}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 2, position: "relative" }}>
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Add
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
};

export default CategoryForm;
