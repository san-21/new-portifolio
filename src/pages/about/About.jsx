import { Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MySkills from "./MySkills";
import MyEducation from "./MyEducation";
import MyCertificates from "./MyCertificates";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const About = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReadMore = () => {
    setReadMore((read) => !read);
  };
  return (
    <Box
      id="about"
      sx={{
        width: "100%",

        backgroundColor: `${theme.palette.background[500]}`,
      }}
    >
      <Toolbar />
      {/*diasbled button  */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0.4 }}
          whileInView={{
            y: -20,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.04,
              duration: 1.6,
            },
          }}
          exit={{
            opacity: 0,
          }}
        >
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
            <FontAwesomeIcon
              className="fa-xs"
              icon={faUser}
              color={`${theme.palette.background[200]}`}
            />
            <Typography
              sx={{
                ml: 1,
                fontSize: "14px",
              }}
            >
              About
            </Typography>
          </Box>

          <Typography
            sx={{
              width: { lg: "80%" },

              mt: 6,

              color: `${theme.palette.text[200]}`,
            }}
          >
            Greetings! I am a highly motivated and detail-oriented software
            engineer with a Bachelor's degree in Software Engineering and a
            recent certification in MERN stack development. My journey in the
            realm of web development has been an exciting adventure, marked by a
            relentless pursuit of knowledge and a passion for crafting seamless
            user experiences. With a solid foundation in both front-end and
            back-end development, I thrive in creating interactive and
            responsive user interfaces that leave a lasting impression.
            <Button
              onClick={handleReadMore}
              sx={{
                textTransform: "capitalize",
              }}
            >
              {readMore ? "Hide Detail" : " Read More"}
            </Button>
          </Typography>
          {readMore && (
            <Typography
              sx={{
                width: { lg: "80%" },

                mt: 6,

                color: `${theme.palette.text[200]}`,
              }}
            >
              As of July 2023, I've embarked on a freelancing journey, armed
              with a profound commitment to delivering top-notch solutions. I'm
              ready to take on any web development challenge, bringing a unique
              blend of innovation, adaptability, and a keen eye for detail.
              Let's collaborate to turn your vision into a digital reality –
              because in the world of web development, possibilities are
              limitless, and I'm here to make them tangible.
            </Typography>
          )}

          {/* tab container */}
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ x: -200, opacity: 0.4 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            // ease: "easeOut",
            type: "spring",
            bounce: 0.04,
            duration: 1.6,
          },
        }}
        // animate={{ y: 0 }}
      >
        <Box
          sx={{
            mt: 6,
            border: `1px solid ${theme.palette.background[400]}`,
            borderRadius: "30px",
            width: { xs: "100%", sm: "100%", md: "99%", lg: "90%" },
            height: "50px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            textColor={`${theme.palette.white[500]}`}
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiButtonBase-root": {
                fontSize: "15px",

                color: `${theme.palette.white[500]}`,
              },
              "& .Mui-selected": {
                border: `1px solid ${theme.palette.background[500]}`,
                borderRadius: "30px",
                backgroundColor: `${theme.palette.primary[500]}`,
                fontWeight: " italic 700",

                color: `${theme.palette.background[500]}`,
              },
            }}
          >
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="My Skills"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Education"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Certificates"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </motion.div>

      {/* contents */}

      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "90%" },
        }}
      >
        <TabPanel value={value} index={0}>
          <MySkills />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyEducation />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyCertificates />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default About;
