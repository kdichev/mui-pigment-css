import { Button } from "@mui/material";
import { styled } from "@pigment-css/react";

const Heading = styled("h1")(({ theme }) => ({
  color: theme.colors.primary,
  fontSize: theme.spacing.unit * 4,
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
