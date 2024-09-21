import { Button } from "@mui/material";
import { styled } from "@mui/material-pigment-css";

const Heading = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.spacing(4),
  fontFamily: theme.typography.fontFamily,
}));

const HomePage = async () => {
  return (
    <div>
      <Heading>Heading</Heading>
      <Button variant="contained" color="primary">
        mui-pigment-css
      </Button>
    </div>
  );
};

export default HomePage;
