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
//import Label from "../components/Label";
import {
  TableListHead,
  TableListToolbar
} from "../sections/@dashboard/Table";
import orderInstance from "src/axios/orderInstance";

const TABLE_HEAD = [
  { id: "no", label: "No#", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "payment", label: "Payment", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "amount", label: "Amount", alignRight: false },
  { id: "date", label: "Expected Delivery", alignRight: false },
  { id: "location", label: "City/State", alignRight: false }
];

export default function Orders() {
  const queryClient = useQueryClient();

//   const { data: categoryList = [], isLoading } = useQuery(
//     "categories",
//     async () => {
//       const categoryResponse = await categoryInstance.get("/show-category");
//       return categoryResponse.data.data;
//     }
//   );

//   const handleDeleteCategory = useMutation(
//     async () => {
//       const categoryResponse = await categoryInstance.delete(
//         `/delete-category/${deleteCategoryId}`
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
      <Page title="Order">
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Orders
            </Typography>
          </Stack>
          <Card>
            <Scrollbar>
              <TableListToolbar />
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableListHead headLabel={TABLE_HEAD} />
                  <TableBody>
                    {/* {categoryList.map((category, index) => (
                      <TableRow hover key={category._id}>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {category.name}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {new Date(category.createdAt).toDateString()}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle3" noWrap>
                            {new Date(category.updatedAt).toDateString()}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))} */}
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
