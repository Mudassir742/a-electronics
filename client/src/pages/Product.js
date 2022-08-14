import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
} from "@mui/material";
//import { styled } from "@mui/material/styles";

import { useQueryClient, useMutation, useQuery } from "react-query";

// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import Iconify from "../components/Iconify";
import DeleteModal from "src/components/modals/DeleteModal";
//import Label from "../components/Label";
import {
  TableListHead,
  TableListToolbar,
  TableActionMenu,
} from "../sections/@dashboard/Table";

import productInstance from "src/axios/productInstance";

const TABLE_HEAD = [
  { id: "no", label: "No#", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "category", label: "Category", alignRight: false },
  { id: "price", label: "Price", alignRight: false },
  { id: "model", label: "Model", alignRight: false },
  { id: "quantity", label: "Quantity", alignRight: false },
  { id: "", alignRight: true },
];

export default function Products() {
  const queryClient = useQueryClient();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");

  const { data: productList = [], isLoading } = useQuery(
    "products",
    async () => {
      const productResponse = await productInstance.get("/show-product");
      console.log(productResponse);
      return productResponse.data.data;
    }
  );

  //   const handleDeleteCategory = useMutation(
  //     async () => {
  //       const categoryResponse = await categoryInstance.delete(
  //         `/delete-category/${deleteProductId}`
  //       );
  //       setDeleteCategoryId("");
  //       return categoryResponse.data.data;
  //     },
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData("categories", data);
  //         setOpenDeleteModal(false);
  //       },
  //       onError: (error) => {
  //         console.log(error);
  //         setOpenDeleteModal(false);
  //       },
  //     }
  //   );

  return (
    <>
      {/* <DeleteModal
        title="Category"
        description="Are you sure you want yo delete this category?"
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        action={handleDeleteCategory}
      /> */}
      <Page title="Categories">
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Products
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/products/product-form?isEdit=false"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Product
            </Button>
          </Stack>
          <Card>
            <Scrollbar>
              <TableListToolbar />
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableListHead headLabel={TABLE_HEAD} />
                  <TableBody>
                    {productList.map((product, index) => (
                      <TableRow hover key={product._id}>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {product.name}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {product?.categoryId?.name}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {product.price} $
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {product.model}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {product.quantity}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <TableActionMenu
                            categoryId={product._id}
                            setOpenDeleteModal={setOpenDeleteModal}
                            setDeleteProductId={setDeleteProductId}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        </Container>
      </Page>
    </>
  );
}