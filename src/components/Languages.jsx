import { Box, Typography } from "@mui/material";

const Languages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Figtree",
          textTransform: "uppercase",
          fontSize: "",
          fontWeight: 700,
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
        }}
      >
        💻 Languages
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "550px",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Figtree",
            border: "2px solid #bdbdbd",
            borderRadius: "30px",
            color: " black",
            width: { xs: "100px", sm: "120px", md: "120px" },
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "5px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          Javascript
        </Typography>
        <Typography
          sx={{
            fontFamily: "Figtree",
            border: "2px solid #bdbdbd",
            borderRadius: "30px",
            color: " black",
            width: { xs: "100px", sm: "120px", md: "120px" },
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "5px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          HTML
        </Typography>
        <Typography
          sx={{
            fontFamily: "Figtree",
            border: "2px solid #bdbdbd",
            borderRadius: "30px",
            color: " black",
            width: { xs: "100px", sm: "120px", md: "120px" },
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "5px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          CSS
        </Typography>
        <Typography
          sx={{
            fontFamily: "Figtree",
            border: "2px solid #bdbdbd",
            borderRadius: "30px",
            color: " black",
            width: { xs: "100px", sm: "120px", md: "120px" },
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "5px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          SCSS
        </Typography>
      </Box>
    </Box>
  );
};

export default Languages;
