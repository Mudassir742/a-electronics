import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchContainer = styled("div")(({ theme }) => ({}));

const SearchComponent = () => {
  return (
    <SearchContainer>
      <Typography variant="h3">
        Shop High Quality Electrnoic Products Now
      </Typography>
      <Typography>
        Looking for electronic products? A-electronic covered you.
      </Typography>
      <input type="text" />
      <Button>Search</Button>
      <Box>Categories</Box>
    </SearchContainer>
  );
};

export default SearchComponent;
