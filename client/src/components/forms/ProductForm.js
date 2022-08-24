// material-ui
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
  Select,
  MenuItem,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useMutation, useQuery } from "react-query";

import Page from "../Page";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadingButton } from "@mui/lab";

import productInstance from "src/axios/productInstance";
import categoryInstance from "src/axios/categoryInstance";

// -------------------------------Style Components-----------------------------------

const PageWrapper = styled(Page)(({ theme }) => ({
  padding: "1rem",
}));

// -----------------------------------------------------------------------------------

const ProductForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isEdit = JSON.parse(searchParams.get("isEdit"));
  const { productId } = useParams();
  const [Loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    categoryId: "",
    name: "",
    price: "",
    model: "",
    quantity: "",
    description: "",
    image: "",
  });

  const { data: categoryList = [], isLoading } = useQuery(
    "categories",
    async () => {
      const categoryResponse = await categoryInstance.get("/show-category");
      return categoryResponse.data.data;
    }
  );

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setLoading(true);
        const productResponse = await productInstance.get(
          `/show-product/${productId}`
        );

        setProduct({
          name: productResponse.data.data.name,
          categoryId: productResponse.data.data.categoryId,
          price: productResponse.data.data.price,
          model: productResponse.data.data.model,
          quantity: productResponse.data.data.quantity,
          description: productResponse.data.data.description,
        });
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    if (productId) {
      getProductDetail();
    }
  }, [productId]);

  const handleAddProduct = useMutation(
    async (values) => {
      console.log(values);
      const requestMethod =
        isEdit === true ? productInstance.put : productInstance.post;
      const requestURL =
        isEdit === true ? `/update-product/${productId}` : "/add-product";

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("categoryId", values.categoryId);
      formData.append("price", values.price);
      formData.append("model", values.model);
      formData.append("quantity", values.quantity);
      formData.append("description", values.description);
      formData.append("image", values.image);

      await requestMethod(requestURL, formData);
    },
    {
      onSuccess: (data) => {
        navigate("/dashboard/products");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <PageWrapper title="Products">
      <Box marginBottom={3}>
        <Typography variant="h4" gutterBottom>
          {isEdit === true ? `Edit Product` : `Add Product`}
        </Typography>
      </Box>
      <Formik
        initialValues={{
          name: product.name,
          categoryId: product.categoryId,
          price: product.price,
          model: product.model,
          quantity: product.quantity,
          description: product.description,
          image: product.image,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(50).required("Name is required"),
          categoryId: Yup.string().max(50).required("Category is required"),
          price: Yup.string().max(20).required("Price is required"),
          model: Yup.string().max(50).required("Model is required"),
          quantity: Yup.string().max(20).required("Quantity is required"),
          description: Yup.string()
            .max(255)
            .required("Description is required"),
            image: Yup.string().max(20).required("image is required"),
        })}
        enableReinitialize={true}
        onSubmit={(values) => handleAddProduct.mutate(values)}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              {/* <Grid item xs={9}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.image && errors.image)}
                >
                  <InputLabel htmlFor="category-image">Image</InputLabel>
                  <OutlinedInput
                    id="category-image"
                    type="text"
                    value={values.image}
                    name="image"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Image"
                    inputProps={{ readOnly: true }}
                  />
                  {touched.image && errors.image && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.image}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid> */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ width: "100%", height: "100%" }}
                >
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {setFieldValue("image", e.target.files[0]); console.log(e.target.files[0])}}
                  />
                </Button>
              </Grid>
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

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.categoryId && errors.categoryId)}
                >
                  <InputLabel htmlFor="category-Id">Category</InputLabel>
                  <Select
                    style={{ height: "60px" }}
                    name="categoryId"
                    id="category-Id"
                    value={values.categoryId}
                    onBlur={handleBlur}
                    label="Category"
                    onChange={handleChange}
                  >
                    {categoryList.map((category) => (
                      <MenuItem value={category._id} key={category._id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {!values.categoryId && touched.name && errors.name && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-assign"
                    >
                      {errors.categoryId}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.price && errors.price)}
                >
                  <InputLabel htmlFor="category-price">Price</InputLabel>
                  <OutlinedInput
                    id="category-price"
                    type="text"
                    value={values.price}
                    name="price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Price"
                    inputProps={{}}
                  />
                  {touched.price && errors.price && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.price}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.model && errors.model)}
                >
                  <InputLabel htmlFor="category-model">Model</InputLabel>
                  <OutlinedInput
                    id="category-model"
                    type="text"
                    value={values.model}
                    name="model"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Model"
                    inputProps={{}}
                  />
                  {touched.model && errors.model && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.model}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.quantity && errors.quantity)}
                >
                  <InputLabel htmlFor="category-quantity">Quantity</InputLabel>
                  <OutlinedInput
                    id="category-quantity"
                    type="text"
                    value={values.quantity}
                    name="quantity"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Quantity"
                    inputProps={{}}
                  />
                  {touched.quantity && errors.quantity && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.quantity}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.description && errors.description)}
                >
                  <InputLabel htmlFor="category-description">
                    Description
                  </InputLabel>
                  <OutlinedInput
                    id="category-description"
                    type="text"
                    value={values.description}
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Description"
                    inputProps={{}}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-title"
                    >
                      {errors.description}
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
                    disabled={Loading || isLoading}
                  >
                    {isEdit === true ? `Update` : `Add`}
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

export default ProductForm;
