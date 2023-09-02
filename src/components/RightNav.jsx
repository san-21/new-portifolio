import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  faUser,
  faEnvelope,
  faCreditCard,
  faGem,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Box, Tooltip, selectClasses } from "@mui/material";
import { Link } from "react-router-dom";

const RightNav = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const theme = useTheme();
  return (
    <Box
      className="rightnav"
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2.5,
        color: `${theme.palette.background[200]}`,
      }}
    >
      <AnchorLink href="#home" onClick={() => setSelectedPage("home")}>
        <Tooltip title="Home" arrow placement="left">
          {selectedPage === "home" && (
            <HomeOutlinedIcon
              fontSize="small"
              sx={{
                color: `${theme.palette.primary[500]}`,
              }}
            />
          )}
          {selectedPage !== "home" && (
            <HomeOutlinedIcon
              fontSize="small"
              sx={{
                color: `${theme.palette.background[200]}`,
              }}
            />
          )}
        </Tooltip>
      </AnchorLink>
      <AnchorLink
        style={{
          marginBottom: "6px",
        }}
        className="fa-sm "
        href="#about"
        onClick={() => setSelectedPage("about")}
      >
        <Tooltip title="About" arrow placement="left">
          {selectedPage === "about" && (
            <FontAwesomeIcon
              icon={faUser}
              color={`${theme.palette.primary[500]}`}
            />
          )}
          {selectedPage !== "about" && (
            <FontAwesomeIcon
              icon={faUser}
              color={`${theme.palette.background[200]}`}
            />
          )}
        </Tooltip>
      </AnchorLink>

      {/* <Tooltip title="Resume" arrow placement="left">
        <Link className="fa-sm" to="/resume">
          <FontAwesomeIcon
            icon={faRectangleList}
            color={`${theme.palette.background[200]}`}
          />
        </Link>
      </Tooltip>
      <Tooltip title="Skill" arrow placement="left">
        <Link className="fa-sm" to="/skills">
          <FontAwesomeIcon
            icon={faGem}
            color={`${theme.palette.background[200]}`}
          />
        </Link>
      </Tooltip> */}
      <AnchorLink
        style={{
          marginBottom: "6px",
        }}
        className="fa-sm"
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      >
        <Tooltip title="Projects" arrow placement="left">
          {selectedPage === "projects" && (
            <FontAwesomeIcon
              icon={faCreditCard}
              color={`${theme.palette.primary[500]}`}
            />
          )}
          {selectedPage !== "projects" && (
            <FontAwesomeIcon
              icon={faCreditCard}
              color={`${theme.palette.background[200]}`}
            />
          )}
        </Tooltip>
      </AnchorLink>
      <AnchorLink
        className="fa-sm"
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      >
        <Tooltip title="Contact" arrow placement="left">
          {selectedPage === "contact" && (
            <FontAwesomeIcon
              icon={faEnvelope}
              color={`${theme.palette.primary[500]}`}
            />
          )}
          {selectedPage !== "contact" && (
            <FontAwesomeIcon
              icon={faEnvelope}
              color={`${theme.palette.background[200]}`}
            />
          )}
        </Tooltip>
      </AnchorLink>
    </Box>
  );
};

export default RightNav;
