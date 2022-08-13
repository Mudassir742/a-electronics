import { useState } from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
// material
import {
  Typography,
  Grid,
  Container,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  InputLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Page from "../Page";
import { MenuProps, options } from "../form-utils/form-utils";

// ----------------------------------------------------------------------

export default function NewTeamForm() {
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

  const Schema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      name: "",
      team: "",
    },
    validationSchema: Schema,
    onSubmit: () => {},
  });

  const {handleSubmit} = formik;

  return (
    <Page title="Add Project">
      <Container>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "2rem" }}>
          Assign Project
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item container xs={12} spacing={4}>
                <Grid item xs={6}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ marginBottom: "1rem" }}
                  >
                    Select Project
                  </InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel
                    id="demo-multi-select-label"
                    sx={{ marginBottom: "1rem" }}
                  >
                    Select Project
                  </InputLabel>

                  <Select
                    labelId="demo-multi-select-label"
                    fullWidth
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
            >
              Assign
            </LoadingButton>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
}
