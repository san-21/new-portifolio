import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            Story began long time ago.my goal and interest is being creative
            software developer. Design and Develop is my Passion.
          </Typography>
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
