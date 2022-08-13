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
// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import Iconify from "../components/Iconify";
//import Label from "../components/Label";
import { TableListHead, TableListToolbar } from "../sections/@dashboard/Table";

const TABLE_HEAD = [
  { id: "no", label: "No#", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "date", label: "Created At", alignRight: false },
];

export default function Categories() {
  return (
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
            to="/dashboard/categories/category-form"
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
                  <TableRow hover>
                    <TableCell component="th" scope="row" padding="normal">
                      <Typography variant="subtitle2" noWrap>
                        1
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row" padding="normal">
                      <Typography variant="subtitle2" noWrap>
                        Mobile
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row" padding="normal">
                      <Typography variant="subtitle2" noWrap>
                        Date
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
