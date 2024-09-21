import { createTheme } from "@mui/material";
import { withPigment } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  transformLibraries: ["@mui/material"],
  theme: createTheme({
    palette: { primary: { main: "#ff6347" } },
    spacing: 8,
    typography: {
      fontFamily: "sans-serif",
    },
  }),
});
