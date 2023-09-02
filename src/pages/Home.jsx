import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Typewriter } from "react-simple-typewriter";
import LeftBox from "../components/LeftBox";
import { motion } from "framer-motion";
const Home = () => {
  const theme = useTheme();
  return (
    <Box
      id="home"
      sx={{
        width: "100%",

        backgroundColor: `${theme.palette.background[500]}`,
      }}
    >
      <Toolbar />
      {/*diasbled button  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          pl: 4,
          alignItems: "center",
          width: "110px",
          height: "30px",
          borderRadius: "20px",
          border: `1px solid ${theme.palette.background[400]}`,
          color: `${theme.palette.text[100]}`,
        }}
      >
        <HomeOutlinedIcon
          sx={{
            fontSize: "14px",
            mr: 1,
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          Home
        </Typography>
      </Box>
      <motion.div
        initial={{ y: 200, opacity: 0.4 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.04,
            duration: 1.6,
          },
        }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            mt: 6,
            mb: 6,
            color: `${theme.palette.white[500]}`,

            //   fontWeight: 700,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "50px", md: "50px", lg: "60px" },
            }}
          >
            Hi i'am{" "}
            <span
              style={{
                color: `${theme.palette.primary[500]}`,
              }}
            >
              Melketsedek
            </span>
            ,
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "50px", md: "50px", lg: "60px" },
            }}
          >
            Web Designer and
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "50px", md: "50px", lg: "55px" },
            }}
          >
            <span
              style={{
                color: `${theme.palette.primary[500]}`,
                fontWeight: "800",
              }}
            >
              <Typewriter
                cursor
                words={["MERN", "Fullstack"]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>{" "}
            Stack Developer
          </Typography>
        </Box>

        <Typography
          sx={{
            width: { lg: "60%" },
            color: `${theme.palette.text[200]}`,
          }}
        >
          I design beautifull and responsive user interface, and fully implement
          and integrate Backend and Database for the web.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Home;
