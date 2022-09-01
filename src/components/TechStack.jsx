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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "2000px", sm: "1000px", md: "1000px" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Box
            sx={{
              marginRight: "40px",
            }}
          >
            <Languages />
          </Box>
          <Box
            sx={{
              marginLeft: "40px",
            }}
          >
            <Frameworks />
          </Box>
        </Stack>
        <br />
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          <Box
            sx={{
              marginRight: "40px",
            }}
          >
            <Systems />
          </Box>
          <Box
            sx={{
              marginLeft: "40px",
            }}
          >
            <Testing />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default TechStack;
