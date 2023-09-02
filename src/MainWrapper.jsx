import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LeftBox from "./components/LeftBox";
import RightNav from "./components/RightNav";
import RightNavDrawer from "./components/RightNavDrawer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";
import About from "./pages/about/About";

const MainWrapper = () => {
  const theme = useTheme();
  return (
    // main wrapper
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* left box */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },

          width: "320px",
          height: "650px",
          position: "fixed",
          left: "15px",
          top: "70px",
          backgroundColor: `${theme.palette.background[500]}`,
          border: `1px solid ${theme.palette.background[400]}`,
          borderRadius: "25px",
        }}
      >
        <LeftBox />
      </Box>
      {/* right box */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          width: "50px",
          height: "200px",
          position: "fixed",
          right: "60px",
          top: "30%",
          backgroundColor: `${theme.palette.background[500]}`,
          border: `1px solid ${theme.palette.background[400]}`,
          borderRadius: "25px",
        }}
      >
        <RightNav />
      </Box>
      {/* nav icon */}
      <Box
        sx={{
          zIndex: 20,
          width: "50px",
          height: "50px",
          position: "fixed",
          right: { xs: "30px", sm: "55px", md: "30px", lg: "60px" },
          top: { xs: "4%", sm: "4%", md: "2.5%", lg: "8%" },
          backgroundColor: `${theme.palette.background[500]}`,
          border: `1px solid ${theme.palette.background[400]}`,
          borderRadius: "100%",
        }}
      >
        <RightNavDrawer />
      </Box>
      {/* main grid layout */}
      <Box
        sx={{
          mt: { xs: "20px", sm: "20px", md: "20px", lg: "70px" },
          ml: { xs: "1%", sm: "5%", md: "15%" },
          mr: { xs: "1%", sm: "5%", md: "15%" },
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          // gridTemplateRows: "repeat(33,95px)",
          gridAutoRows: "95px",

          gap: 4,
        }}
      >
        {/* left large Box */}
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
            },
            gridRow: "span 5",
            backgroundColor: `${theme.palette.background[500]}`,
            border: `1px solid ${theme.palette.background[400]}`,
            borderRadius: "25px",
          }}
        >
          <LeftBox />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "4 / 13",
              xl: "4 / 13",
            },
            gridRow: {
              xs: "span 4",
              sm: "span 6",
              md: "span 6",
              lg: "span 6",
            },
            backgroundColor: `${theme.palette.background[500]}`,
          }}
        >
          <Home />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "4 / 13",
              xl: "4 / 13",
            },
            gridRow: {
              xs: "span 7",
              sm: "span 8",
              md: "span 8",
              lg: "span 8",
            },
            backgroundColor: `${theme.palette.background[500]}`,
          }}
        >
          <About />
        </Box>

        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "4 / 13",
              xl: "4 / 13",
            },
            gridRow: {
              xs: "span 18",
              sm: "span 15",
              md: "span 15",
              lg: "span 15",
            },
            backgroundColor: `${theme.palette.background[500]}`,
          }}
        >
          <Projects />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "4 / 13",
              xl: "4 / 13",
            },
            gridRow: {
              xs: "span 7",
              sm: "span 7",
              md: "span 7",
              lg: "span 7",
            },
            backgroundColor: `${theme.palette.background[500]}`,
          }}
        >
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default MainWrapper;
