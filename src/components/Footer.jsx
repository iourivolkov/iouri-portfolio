import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: "#112f5c",
        color: "white",
        height: "300px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Figtree",
          fontSize: "34px",
          fontWeight: 700,
          marginTop: "20px",
        }}
      >
        Let's get in touch!
      </Typography>
      <Button
        disableElevation
        disableRipple
        variant="contained"
        sx={{
          fontFamily: "Figtree",
          width: "200px",
          height: "60px",
          bgcolor: "#ff7575",
          color: "white",
          marginTop: "20px",
          borderRadius: "30px",
          "&:hover": {
            bgcolor: "#ff7575",
          },
        }}
      >
        Email me
      </Button>
      <Typography
        sx={{
          marginTop: "80px",
          fontFamily: "Figtree",
        }}
      >
        iouri volkov 2022 all rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
