import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { duration, useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { navDrawerMenu } from "../assets/data";
import SocialIcons from "./SocialIcons";
import { useNavigate } from "react-router-dom";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
const RightNavDrawer = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          pt: 0.8,
          display: "grid",
        }}
      >
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon
            fontSize="small"
            sx={{
              color: `${theme.palette.background[200]}`,
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <Drawer
          anchor="right"
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerOpen}
          sx={{
            "& .MuiDrawer-paper": {
              width: "320px",
              backgroundColor: `${theme.palette.background[600]}`,
            },
            "& .MuiBackdrop-root": {
              backgroundColor: ` rgba(76, 76, 76, 0.5)`,
              opacity: 0.2,
            },
          }}
        >
          <Box
            sx={{
              color: `${theme.palette.background[200]}`,
              fontSize: "13px",
              p: 6,
            }}
          >
            <Typography
              sx={{
                mb: 4,
                ml: 5,
              }}
            >
              Menu
            </Typography>
            <List
              sx={{
                ml: 5,
              }}
            >
              {navDrawerMenu.map((menu) => (
                <motion.div
                  key={menu.title}
                  initial={{ y: 100, opacity: 0.2 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 1.1,
                  }}
                >
                  <ListItem disablePadding>
                    <AnchorLink
                      style={{
                        textDecoration: "none",
                        color: `${theme.palette.background[200]}`,
                      }}
                      href={menu.link}
                      onClick={() => {
                        setSelectedPage(menu.title.toLowerCase());
                        setIsOpen(false);
                      }}
                    >
                      {selectedPage === menu.title.toLowerCase() && (
                        <ListItemButton className="drawermenu" disableGutters>
                          <ListItemIcon>
                            <FontAwesomeIcon
                              className="buttonicon"
                              icon={menu.icon}
                              color={`${theme.palette.primary[500]}`}
                            />
                          </ListItemIcon>

                          <Typography
                            className="text"
                            sx={{
                              fontSize: "12px",
                              color: `${theme.palette.white[500]}`,
                            }}
                          >
                            {" "}
                            {menu.title}
                          </Typography>
                        </ListItemButton>
                      )}
                      {selectedPage !== menu.title.toLowerCase() && (
                        <ListItemButton className="drawermenu" disableGutters>
                          <ListItemIcon>
                            <FontAwesomeIcon
                              className="buttonicon"
                              icon={menu.icon}
                              color={`${theme.palette.background[200]}`}
                            />
                          </ListItemIcon>

                          <Typography
                            className="text"
                            sx={{
                              fontSize: "12px",
                            }}
                          >
                            {" "}
                            {menu.title}
                          </Typography>
                        </ListItemButton>
                      )}
                    </AnchorLink>
                  </ListItem>
                </motion.div>
              ))}
            </List>
            <Typography
              sx={{
                mb: 4,
                mt: 4,
                ml: 5,
              }}
            >
              Social
            </Typography>
            <motion.div
              initial={{ x: -60, opacity: 0.2 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.8,
                },
              }}
            >
              <SocialIcons from="drawer" />
            </motion.div>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default RightNavDrawer;
