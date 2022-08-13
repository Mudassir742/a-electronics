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
import categoryInstance from "src/axios/categoryInstance";

const TABLE_HEAD = [
  { id: "no", label: "No#", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "add", label: "Created At", alignRight: false },
  { id: "update", label: "Updated At", alignRight: false },
  { id: "", alignRight: true },
];

export default function Categories() {
  const queryClient = useQueryClient();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState("");

  const { data: categoryList = [], isLoading } = useQuery(
    "categories",
    async () => {
      const categoryResponse = await categoryInstance.get("/show-category");

      return categoryResponse.data.data;
    }
  );

  const handleDeleteCategory = useMutation(
    async () => {
      const categoryResponse = await categoryInstance.delete(
        `/delete-category/${deleteCategoryId}`
      );
      setDeleteCategoryId("");
      return categoryResponse.data.data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData("categories", data);
        setOpenDeleteModal(false);
      },
      onError: (error) => {
        console.log(error);
        setOpenDeleteModal(false);
      },
    }
  );

  return (
    <>
      <DeleteModal
        title="Category"
        description="Are you sure you want yo delete this category?"
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        action={handleDeleteCategory}
      />
      <Page title="Categories">
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Categories
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/categories/category-form?isEdit=false"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Category
            </Button>
          </Stack>
          <Card>
            <Scrollbar>
              <TableListToolbar />
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableListHead headLabel={TABLE_HEAD} />
                  <TableBody>
                    {categoryList.map((category, index) => (
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
                        <TableCell component="th" scope="row" padding="normal">
                          <TableActionMenu
                            categoryId={category._id}
                            setOpenDeleteModal={setOpenDeleteModal}
                            setDeleteCategoryId={setDeleteCategoryId}
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
