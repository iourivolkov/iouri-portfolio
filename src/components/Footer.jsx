import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
        color: "white",
        height: "400px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Figtree",
          fontSize: "40px",
          fontWeight: 700,
          marginTop: "30px",
        }}
      >
        Let's collaborate 🤝🏻
      </Typography>
      <Typography
        sx={{
          fontSize: "0.8em",
          fontFamily: "Figtree",
        }}
      >
        Feel free to contact me!
      </Typography>
      <Button
        disableElevation
        disableRipple
        variant="contained"
        sx={{
          fontFamily: "Figtree",
          width: "200px",
          height: "40px",
          fontSize: "0.8em",
          color: "#ff7575",
          bgcolor: "transparent",
          border: "2px solid #ff7575",
          marginTop: "20px",
          borderRadius: "30px",
          "&:hover": {
            bgcolor: "#ff7575",
            color: "white",
            border: "none",
          },
        }}
      >
        email me
      </Button>
      <Typography
        sx={{
          marginTop: "80px",
          fontFamily: "Figtree",
          marginBottom: "30px",
        }}
      >
        &#169; Iouri Volkov. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
