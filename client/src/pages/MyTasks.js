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
import Label from "../components/Label";
import {
  MyTaskListHead,
  MyTaskListToolbar,
} from "../sections/@dashboard/mytask";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "project", label: "Project", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "priority", label: "Priority", alignRight: false },
  { id: "deadline", label: "Dealdine", alignRight: false },
];

// const ButtonWrapper = styled(Button)(({ theme, borderColor, hoverColor }) => ({
//   padding: ".6rem 0",
//   border: "1px solid",
//   borderColor: borderColor,
//   "&:hover": {
//     backgroundColor: hoverColor,
//   },
// }));

const tasks = [
  {
    _id: "1",
    name: "Project_1",
    status: "in-progress",
    priority: "medium",
    deadline: "June 10,2022",
  },
  {
    _id: "2",
    name: "Project_2",
    status: "completed",
    priority: "low",
    deadline: "May 10,2022",
  },
];

export default function MyTask() {
  return (
    <Page title="My Task">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            My Task
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/my-task/new-task"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Task
          </Button>
        </Stack>
        <Card>
          <Scrollbar>
            <MyTaskListToolbar />
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <MyTaskListHead headLabel={TABLE_HEAD} />
                <TableBody>
                  {tasks &&
                    tasks.map((row) => {
                      const { _id, name, status, priority, deadline } = row;
                      return (
                        <TableRow hover key={_id}>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={
                                (status === "in-progress" && "error") ||
                                "success"
                              }
                            >
                              {status}
                            </Label>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle3" noWrap>
                              {priority}
                            </Typography>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle3" noWrap>
                              {deadline}
                            </Typography>
                          </TableCell>
                          {/* <TableCell align="left">
                            <ButtonWrapper
                              borderColor="green"
                              hoverColor="#c2f5b8"
                            >
                              <Iconify
                                color="green"
                                size={50}
                                icon="charm:tick"
                              />
                            </ButtonWrapper>
                          </TableCell>
                          <TableCell align="left">
                            <ButtonWrapper
                              borderColor="red"
                              hoverColor="#f5b8b8"
                            >
                              <Iconify
                                color="red"
                                size={50}
                                icon="charm:cross"
                              />
                            </ButtonWrapper>
                          </TableCell> */}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
