import { Avatar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialIcons } from "../assets/data";
const SocialIcons = ({ from }) => {
  const theme = useTheme();
  return (
    <Box>
      {from === "leftbox" && (
        <Box
          sx={{
            mt: 2,
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <Avatar srcSet={<GitHubIcon />} /> */}

          {socialIcons.map((social) => (
            <Avatar
              className="socialbuttons"
              key={social.title}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                border: `2px solid ${theme.palette.background[400]}`,
                backgroundColor: `${theme.palette.background[500]}`,

                m: 0.8,
              }}
            >
              <a className="fa-xs" href={social.link} target="_blank">
                <FontAwesomeIcon
                  icon={social.icon}
                  color={`${theme.palette.background[200]}`}
                />
              </a>
            </Avatar>
          ))}
        </Box>
      )}
      {from === "drawer" && (
        <Box
          sx={{
            mt: 2,
            mb: 3,
            ml: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {socialIcons.map((social) => (
            <a
              key={social.title}
              className="fa-sm"
              href={social.link}
              target="_blank"
            >
              <FontAwesomeIcon
                className="drawersocialicon"
                icon={social.icon}
                color={`${theme.palette.background[200]}`}
              />
            </a>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SocialIcons;
