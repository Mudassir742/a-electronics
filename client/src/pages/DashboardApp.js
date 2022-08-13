// material
import {
  Card,
  Table,
  Stack,
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
import Label from "../components/Label";
import {
  ProjectListHead,
  ProjectListToolbar,
} from "../sections/@dashboard/projects";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "project", label: "Project", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "priority", label: "Priority", alignRight: false },
];

const projects = [
  {
    _id: "1",
    name: "Project_1",
    status: "completed",
    priority: "medium",
  },
  {
    _id: "2",
    name: "Project_2",
    status: "in-progress",
    priority: "medium",
  },
  {
    _id: "3",
    name: "Project_3",
    status: "in-progress",
    priority: "medium",
  },
  {
    _id: "4",
    name: "Project_4",
    status: "in-progress",
    priority: "medium",
  },
  {
    _id: "5",
    name: "Project_5",
    status: "completed",
    priority: "low",
  },
];

export default function AllProjects() {
  return (
    <Page title="Dashboard">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            All Projects
          </Typography>
        </Stack>
        <Card>
          <Scrollbar>
            <ProjectListToolbar />
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ProjectListHead headLabel={TABLE_HEAD} />
                <TableBody>
                  {projects &&
                    projects.map((row) => {
                      const { _id, name, status, priority } = row;
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
