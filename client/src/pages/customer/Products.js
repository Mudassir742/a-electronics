import { styled } from "@mui/material/styles";

//components
import SearchSection from "src/components/products/search";

const RootStyle = styled("section")(({ theme, stickey }) => ({}));

const Home = () => {
  return (
    <RootStyle>
      <SearchSection />
    </RootStyle>
  );
};

export default Home;
