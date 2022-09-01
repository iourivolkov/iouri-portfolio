import { Stack, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const LandingPage = ({ title, subtitle, heading }) => {
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
          color: "#ff7575",
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
          width: { xs: "500px", sm: "700px", md: "1300px" },
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          color: "#FF7575",
          fontSize: { xs: "22px", sm: "36px", md: "64px" },
          fontWeight: "700",
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
          width: { xs: "400px", sm: "700px", md: "1000px" },
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
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
          textTransform: "uppercase",
          color: "#FF7575",
          borderRadius: "30px",
          width: "300px",
          height: "60px",
          marginTop: { xs: "50px", sm: "75px", md: "100px" },
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
          marginTop: "95px",
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
