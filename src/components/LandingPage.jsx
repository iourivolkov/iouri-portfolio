import { Stack, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const LandingPage = ({ title, subtitle }) => {
  return (
    <Stack
      sx={{
        ...style,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontWeight: 400,
          color: "#FF7575",
          fontSize: "64px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontWeight: 100,
          color: "#FF7575",
          fontSize: "24px",
        }}
      >
        {subtitle}
      </Typography>
      <Button
        disableRipple
        disableElevation
        variant="outlined"
        sx={{
          border: "3px solid #FF7575",
          fontFamily: "Figtree",
          fontWeight: 100,
          fontSize: "16px",
          textTransform: "none",
          color: "#FF7575",
          borderRadius: "30px",
          width: "300px",
          height: "60px",
          marginTop: "100px",
          "&:hover": {
            bgcolor: "#FF7575",
            color: "white",
            cursor: "pointer",
            border: "none",
          },
        }}
      >
        Let's collaborate!
      </Button>
      <Button
        disableElevation
        disableRipple
        sx={{
          borderRadius: 100,
          width: 60,
          height: 60,
          marginTop: "75px",
          bgcolor: "#FF7575",
          color: "white",
          "&:hover": {
            bgcolor: "#FF7576",
          },
        }}
      >
        <ArrowDownwardIcon />
      </Button>
    </Stack>
  );
};

export default LandingPage;
