import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { skillsData } from "../../assets/data";

import { motion } from "framer-motion";
const MySkills = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        {skillsData.map((skill) => (
          <Box
            key={skill.title}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            {/* left box icon box  */}
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
                  // width: "8%",
                  mr: { xs: 2, sm: 3 },
                }}
              >
                <Avatar
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30%",
                    border: `2px solid ${theme.palette.background[400]}`,
                    backgroundColor: `${theme.palette.background[500]}`,

                    m: 0.8,
                  }}
                >
                  <img
                    style={{
                      color: `${theme.palette.white[500]}`,

                      objectFit: "cover",
                    }}
                    alt={skill.title}
                    width="90%"
                    height="auto"
                    src={skill.icon}
                  />
                </Avatar>
              </Box>
            </motion.div>

            {/* right box */}
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <motion.div
                initial={{ x: 50, opacity: 0.4 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: `${theme.palette.text[100]}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {skill.percentage}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 1,
                    mb: 2,
                    width: "100%",
                    height: "5px",
                    backgroundColor: `${theme.palette.white[500]}`,
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="skills"
                    style={{
                      // backgroundColor: `${theme.palette.primary[500]}`,
                      width: `${skill.percentage}%`,
                      height: "5px",
                    }}
                  ></div>
                </Box>
              </motion.div>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MySkills;
