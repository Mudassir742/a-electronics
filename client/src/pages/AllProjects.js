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
  ProjectListHead,
  ProjectListToolbar,
} from "../sections/@dashboard/projects";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "project", label: "Project", alignRight: false },
  { id: "description", label: "Description", alignRight: false },
  { id: "type", label: "Type", alignRight: false },
  { id: "team", label: "Team", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "priority", label: "Priority", alignRight: false },
  { id: "deadline", label: "Dealdine", alignRight: false },
];

const projects = [
  {
    _id: "1",
    name: "Project_1",
    type: "SE",
    description: "project description here",
    status: "in-progress",
    priority: "medium",
    deadline: "June 10,2022",
    team: "Team-1",
  },
  {
    _id: "2",
    name: "Project_2",
    type: "E-commerce",
    description: "project description here",
    status: "in-progress",
    priority: "high",
    deadline: "June 01,2022",
    team: "Team-2",
  },
  {
    _id: "3",
    name: "Project_3",
    type: "Health Care",
    description: "project description here",
    status: "upcoming",
    priority: "medium",
    deadline: "July 10,2022",
    team: "Team-1",
  },
  {
    _id: "4",
    name: "Project_4",
    type: "AI",
    description: "project description here",
    status: "completed",
    priority: "medium",
    deadline: "May 10,2022",
    team: "Team-2",
  },
];

export default function AllProjects() {
  return (
    <Page title="All Projects">
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
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/all-projects/new-project"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Project
          </Button>
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
                      const {
                        _id,
                        name,
                        type,
                        description,
                        team,
                        status,
                        priority,
                        deadline,
                      } = row;
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
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {description}
                            </Typography>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {type}
                            </Typography>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {team}
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
