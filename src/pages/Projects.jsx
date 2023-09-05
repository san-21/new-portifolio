import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { projectData, smallProjects } from "../assets/data/projectsData";

import { GitHub, ViewInArOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      id="projects"
      sx={{
        width: "100%",

        backgroundColor: `${theme.palette.background[500]}`,
      }}
    >
      <Toolbar />
      {/*diasbled button  */}
      <motion.div
        initial={{ y: 200, opacity: 0.4 }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.04,
            duration: 1.6,
          },
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
            icon={faCreditCard}
            color={`${theme.palette.background[200]}`}
          />
          <Typography
            sx={{
              ml: 1,
              fontSize: "14px",
            }}
          >
            Projects
          </Typography>
        </Box>
      </motion.div>

      <Typography
        variant="h4"
        sx={{
          ml: 1,
          mt: 5,

          color: `${theme.palette.white[500]}`,
          fontWeight: "italic ",
        }}
      >
        Recent{" "}
        <span
          style={{
            color: `${theme.palette.primary[500]}`,
          }}
        >
          Projects
        </span>
      </Typography>

      {projectData.map((project) => (
        <Box
          key={project.id}
          sx={{
            mt: 5,
          }}
        >
          <motion.div
            initial={{ x: -200, opacity: 0.2 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.04,
                duration: 1.6,
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                mt: 6,
                fontSize: "23px",
                color: `${theme.palette.white[500]}`,
                fontWeight: "italic 700",
              }}
            >
              {project.title}
            </Typography>
          </motion.div>
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
            whileHover={{
              transition: {
                duration: 1,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Paper
              className="project"
              key={project.id}
              sx={{
                mt: 4,
                textAlign: "center",
                width: { xs: "99%", sm: "99%", md: "99%", lg: "90%" },
                height: "360px",
                borderRadius: "25px",
                backgroundColor: `${theme.palette.white[350]}`,
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  // margin: "25px",

                  objectFit: "cover",
                  borderRadius: "25px",
                }}
                src={project.img}
                alt={project.title}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: " 3%",
                  left: "5%",
                  right: "5%",

                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <Button
                  LinkComponent={Link}
                  to={project.demolink}
                  target="_blank"
                  sx={{
                    fontWeight: "italic 700",
                    textAlign: "center",
                    width: "120px",
                    height: "40px",
                    mr: 3,
                    backgroundColor: `${theme.palette.primary[100]}`,
                    borderRadius: "30px",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary[500]}`,
                      color: `${theme.palette.text[500]}`,
                    },
                  }}
                  variant="outlined"
                  startIcon={
                    <GitHub
                      sx={{
                        ml: 1,
                        color: `${theme.palette.text[500]}`,
                      }}
                    />
                  }
                />
                <Button
                  LinkComponent={Link}
                  to={project.demolink}
                  target="_blank"
                  sx={{
                    fontWeight: "italic 700",
                    width: "120px",
                    height: "40px",

                    textTransform: "capitalize",
                    color: `${theme.palette.text[500]}`,
                    backgroundColor: `${theme.palette.primary[100]}`,
                    borderRadius: "30px",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary[500]}`,
                      color: `${theme.palette.text[500]}`,
                    },
                  }}
                  variant="outlined"
                >
                  Demo
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      ))}
      <Typography
        variant="h4"
        sx={{
          ml: 1,
          mt: 10,
          mb: 2,

          color: `${theme.palette.white[500]}`,
          fontWeight: "italic ",
        }}
      >
        Small-trial{" "}
        <span
          style={{
            color: `${theme.palette.primary[500]}`,
          }}
        >
          Projects
        </span>
      </Typography>
      <motion.div
        initial={{ x: -100, opacity: 0.4 }}
        whileInView={{
          x: 0,
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
            width: { xs: "100%", sm: "99%", md: "99%", lg: "90%" },
            rowGap: { xs: 11, sm: 6, md: 6, lg: 6 },
          }}
          mt={7}
          display="grid"
          gridTemplateColumns="repeat(12,1fr)"
          gridTemplateRows="repeat(4,100px)"
          columnGap={2}
        >
          {smallProjects.map((miniproject) => (
            <Box
              className="miniproject"
              key={miniproject.id}
              sx={{
                gridColumn: {
                  xs: "span 13",
                  sm: "span 6",
                  md: "span 6",
                  lg: "span 6",
                  xl: "span 6",
                },
                gridRow: {
                  xs: "span 3",
                  sm: "span 4",
                  md: "span 4",
                  lg: "span 4",
                },
                textALign: "center",
              }}
            >
              <Paper
                sx={{
                  backgroundColor: `${theme.palette.white[100]}`,
                  height: { xs: "450px", sm: "99%", md: "99%", lg: "99%" },
                  p: 2,
                  borderRadius: "30px",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "97%",
                    height: "94%",
                    objectFit: "cover",
                    borderRadius: "30px",
                    marginTop: "15px",
                    border: `1px solid ${theme.palette.text[200]}`,
                  }}
                  src={miniproject.img}
                  alt={miniproject.title}
                />

                <Box
                  className="topoverlay"
                  sx={{
                    backgroundColor: `${theme.palette.background[500]}`,
                    opacity: 0.2,
                  }}
                >
                  top
                </Box>
                <Box
                  className="bottomoverlay"
                  sx={{
                    backgroundColor: `${theme.palette.background[500]}`,
                    opacity: 0.2,
                  }}
                ></Box>

                <Box
                  className="demobutton"
                  sx={{
                    borderRadius: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 3,
                  }}
                >
                  <Button
                    LinkComponent={Link}
                    to={miniproject.githublink}
                    target="_blank"
                    sx={{
                      fontWeight: "italic 700",
                      textAlign: "center",
                      width: "120px",
                      height: "40px",
                      mr: 3,
                      backgroundColor: `${theme.palette.primary[100]}`,
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary[500]}`,
                        color: `${theme.palette.text[500]}`,
                      },
                    }}
                    variant="outlined"
                    startIcon={
                      <GitHub
                        sx={{
                          ml: 1,
                          color: `${theme.palette.text[500]}`,
                        }}
                      />
                    }
                  />
                  <Button
                    LinkComponent={Link}
                    to={miniproject.demolink}
                    target="_blank"
                    sx={{
                      fontWeight: "italic 700",
                      width: "120px",
                      height: "40px",

                      textTransform: "capitalize",
                      color: `${theme.palette.text[500]}`,
                      backgroundColor: `${theme.palette.primary[100]}`,
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary[500]}`,
                        color: `${theme.palette.text[500]}`,
                      },
                    }}
                    variant="outlined"
                  >
                    Demo
                  </Button>
                </Box>
              </Paper>

              <Typography
                variant="h5"
                sx={{
                  ml: 12,
                  mt: 2,
                  // p: 3,

                  color: `${theme.palette.text[100]}`,
                  fontWeight: "italic",
                }}
              >
                {miniproject.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Projects;
