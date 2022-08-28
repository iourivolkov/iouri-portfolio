import { Stack, Grid, Box, Typography } from "@mui/material";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Systems from "./Systems";
import Testing from "./Testing";

const TechStack = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 8 }}
          sx={{
            width: { xs: "500px", sm: "700px", md: "800px" },
          }}
        >
          <Languages />
          <Frameworks />
          <Systems />
          <Testing />
        </Grid>
      </Box>
    </>
  );
};

export default TechStack;
