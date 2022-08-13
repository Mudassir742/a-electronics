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
import {
  ProjectListHead,
  ProjectListToolbar,
} from "../sections/@dashboard/projects";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "team", label: "Team", alignRight: false },
  { id: "project", label: "Assigned-Project", alignRight: false },
  { id: "type", label: "Type", alignRight: false },
  { id: "priority", label: "Priority", alignRight: false },
];

const projects = [
  {
    _id: "1",
    name: "Project_1",
    type: "SE",
    priority: "medium",
    team: "Team-1",
  },
  {
    _id: "2",
    name: "Project_2",
    type: "E-commerce",
    priority: "high",
    team: "Team-2",
  },
  {
    _id: "3",
    name: "Project_3",
    type: "Health Care",
    priority: "medium",
    team: "Team-1",
  },
  {
    _id: "4",
    name: "Project_4",
    type: "AI",
    priority: "medium",
    team: "Team-2",
  },
];

export default function AllTeams() {
  return (
    <Page title="All Teams">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            All Teams
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/all-teams/new-team"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Team
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
                      const { _id, name, type, team, priority } = row;
                      return (
                        <TableRow hover key={_id}>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {team}
                            </Typography>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle3" noWrap>
                              {name}
                            </Typography>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Typography variant="subtitle3" noWrap>
                              {type}
                            </Typography>
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
