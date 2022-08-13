import { useState } from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Typography,
  Grid,
  TextField,
  Container,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Page from "../Page";
import { MenuProps, options } from "../form-utils/form-utils";

// ----------------------------------------------------------------------

export default function ProjectForm() {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .max(20, "Must be 20 characters or less")
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      description: "",
      priority: "",
      deadline: "",
      team: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {},
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Page title="Add Project">
      <Container>
        <Typography variant="h4" gutterBottom sx={{marginBottom:'2rem'}}>
          Add New Project
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item container xs={12} spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Name"
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={6} spacing={4}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Type"
                    {...getFieldProps("type")}
                    error={Boolean(touched.type && errors.type)}
                    helperText={touched.type && errors.type}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Description"
                    {...getFieldProps("description")}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Priority"
                    {...getFieldProps("priority")}
                    error={Boolean(touched.priority && errors.priority)}
                    helperText={touched.priority && errors.priority}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Deadline"
                    {...getFieldProps("deadline")}
                    error={Boolean(touched.deadline && errors.deadline)}
                    helperText={touched.deadline && errors.deadline}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Select
                    fullWidth
                    label="Team"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="all">
                      <ListItemIcon>
                        <Checkbox
                          checked={isAllSelected}
                          indeterminate={
                            selected.length > 0 &&
                            selected.length < options.length
                          }
                        />
                      </ListItemIcon>
                      <ListItemText primary="Select All" />
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ background: "#7e57c2", marginTop: "3rem" }}
              loading={isSubmitting}
            >
              Create
            </LoadingButton>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
}
