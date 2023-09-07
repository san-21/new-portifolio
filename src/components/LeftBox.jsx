import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import myphotosmall from "../assets/images/myphotosmall.jpg";

import myphoto from "../assets/images/myphoto.JPG";
import SocialIcons from "./SocialIcons";
import ProgressiveImage from "react-progressive-graceful-image";
import AnchorLink from "react-anchor-link-smooth-scroll";
const LeftBox = () => {
  const theme = useTheme();
  return (
    // main container
    <Box
      id="main"
      sx={{
        p: "20px 25px 20px 25px",

        justifyContent: "space-between",
        alignItems: "center",
        color: `${theme.palette.white[500]}`,
      }}
    >
      {/* titile */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "", sm: "space-around", md: "space-between" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          Melketsedek
        </Typography>
        <Box
          sx={{
            pl: 2,
          }}
        >
          <Typography
            sx={{
              // display: { xs: "none", sm: "none", md: "block" },
              fontSize: "13px",
              color: `${theme.palette.text[100]}`,
            }}
          >
            MERN Developer
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "grid", sm: "grid", md: "grid", lg: "block" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* image */}
        <Box
          sx={{
            mt: 4,
            p: "0px 20px 0px 25px",

            width: "100%",
            height: "210px",
          }}
        >
          <ProgressiveImage src={myphoto} placeholder={myphotosmall}>
            {(src, loading) => (
              <img
                className={`image${loading ? " loading" : " loaded"}`}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "220px",
                  height: "100%",
                  borderRadius: "25px",
                  border: `1px solid ${theme.palette.background[400]}`,
                }}
                src={src}
                alt="myphoto"
              />
            )}
          </ProgressiveImage>
        </Box>
        <Box
          sx={{
            mt: 4,
            color: `${theme.palette.text[100]}`,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              mb: 1,
            }}
          >
            cherumelketsedek21@gmail.com
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Addis Ababa,Ethiopia
          </Typography>
          <Typography
            sx={{
              color: `${theme.palette.text[200]}`,
              fontSize: "14px",
              textAlign: "center",

              mt: 3,
            }}
          >
            © 2023 Melketsedek.All Rights Reserved
          </Typography>
        </Box>
        {/* Social Account buttons */}
        <SocialIcons from="leftbox" />
      </Box>
      <AnchorLink href="#contact">
        <Button
          size="large"
          fullWidth
          variant="contained"
          startIcon={<MailOutlineIcon />}
          sx={{
            borderRadius: "20px",
            "&:hover": {
              border: `1px solid ${theme.palette.primary[500]}`,
              backgroundColor: `${theme.palette.background[500]}`,
              color: `${theme.palette.primary[500]}`,
            },
          }}
        >
          Contact Me
        </Button>
      </AnchorLink>
    </Box>
  );
};
export default LeftBox;
