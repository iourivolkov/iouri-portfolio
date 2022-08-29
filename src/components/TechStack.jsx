import { Stack, Grid, Box, Typography } from "@mui/material";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Systems from "./Systems";
import Testing from "./Testing";

const TechStack = () => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "400px", sm: "500px", md: "1000px" },
        }}
      >
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Languages />
          <Frameworks />
        </Stack>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Systems />
          <Testing />
        </Stack>
      </Stack>
    </>
  );
};

export default TechStack;
