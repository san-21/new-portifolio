import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { educationData } from "../../assets/data";
import { motion } from "framer-motion";
const MyEducation = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0.4 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.04,
          duration: 1.6,
        },
      }}
    >
      <Box
        sx={{
          mt: 2,
        }}
      >
        {educationData.map((education) => (
          <Box
            key={education.title}
            sx={{
              mt: 2,
              width: "100%",
              color: `${theme.palette.text[200]}`,
            }}
          >
            <Typography
              sx={{
                fontWeight: "italic",
              }}
            >
              <span
                style={{
                  color: `${theme.palette.text[100]}`,
                  fontSize: "15px",
                }}
              >
                {education.title} ,
              </span>
              {education.org}, {education.state}
            </Typography>
            <Typography
              sx={{
                color: `${theme.palette.text[200]}`,
                fontSize: "13px",
              }}
            >
              {education.year}
            </Typography>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default MyEducation;
