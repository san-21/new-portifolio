import { Box, Typography } from "@mui/material";
import React from "react";
import { docs } from "../../assets/data/resume";
import { Carousel } from "react-carousel-minimal";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
const MyCertificates = () => {
  const theme = useTheme();
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: `${theme.palette.text[500]}`,
  };
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.background[300]}`,
        borderRadius: "30px",
        p: 3,
      }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.04,
            duration: 2,
          },
        }}
      >
        <Carousel
          data={docs}
          width="100%"
          height="400px"
          captionPosition="top"
          captionStyle={captionStyle}
          radius="30px"
          slideImageFit="cover"
          slideBackgroundColor={`${theme.palette.background[500]}`}
          thumbnails={true}
          thumbnailWidth="60px"
          style={{
            textAlign: "center",
          }}
        />
      </motion.div>
    </Box>
  );
};

export default MyCertificates;
