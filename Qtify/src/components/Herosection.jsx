import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headphones from "../assets/hero_headphones.png"; // Correct path

const Herosection = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        background: "#121212",
        height: "270px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2, // padding for small screens
      }}
    >
      <Box sx={{ width: "600px", ml: "100px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Poppins",
          }}
        >
          100 thousand songs, ad-free <br /> over thousands podcast episodes
        </Typography>
      </Box>

      <Box>
        <img alt="headphones" src={headphones} height="200" />
      </Box>
    </Stack>
  );
};

export default Herosection;
