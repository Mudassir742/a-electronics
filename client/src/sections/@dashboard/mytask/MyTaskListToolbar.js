// material
import { styled } from "@mui/material/styles";
import { Toolbar, Tooltip, IconButton } from "@mui/material";
// component
import Iconify from "../../../components/Iconify";

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1, 0, 3),
}));

// ----------------------------------------------------------------------

export default function MyTaskListToolbar({ onFilterChange, currentFilter }) {
  return (
    <RootStyle>
      <Tooltip title="Filter list">
        <IconButton>
          <Iconify icon="ic:round-filter-list" />
        </IconButton>
      </Tooltip>
    </RootStyle>
  );
}
