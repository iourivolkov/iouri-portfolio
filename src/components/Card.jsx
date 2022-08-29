import { Box } from "@mui/material";

const Card = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "#ebebeb",
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
