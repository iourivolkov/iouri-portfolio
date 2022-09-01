import { Typography, Box } from "@mui/material";

const Systems = () => {
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
          fontWeight: 700,
          fontSize: { xs: "14px", sm: "16px", md: "20px" },

          textDecoration: "underline 3px solid #ff7575",
          textUnderlineOffset: 6,
        }}
      >
        📊 Systems &#38; Databases
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
            marginBottom: "20px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          PostgreSQL
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
            marginBottom: "20px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          MongoDB
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
            marginBottom: "20px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          Git
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
            marginBottom: "20px",
            fontSize: { xs: "12px", sm: "16px", md: "16px" },
          }}
        >
          Github
        </Typography>
      </Box>
    </Box>
  );
};

export default Systems;
