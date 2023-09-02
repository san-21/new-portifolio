import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputBase,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
// import dotenv from "dotenv";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";

import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

let name, phone, email, message;
const Contact = () => {
  // snackbar
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const handleOpenSnackbar = () => {
    setOpen(true);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setErrorOpen(false);
  };
  // snackbar
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const canSend = [name, phone, email, message].every(Boolean);

  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Melketsedek Cheru",
          from_email: form.email,
          to_email: "cherumelketsedek@gmail.com",
          phone: form.phone,
          message: form.message,
        },

        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setIsSending(false);
        setOpen(true);
        // alert("Thank you. your message sent successfully.I will Contact You");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setIsSending(false);
        setErrorOpen(true);
        // alert("Your Message Not Sent");
      });
  };
  const theme = useTheme();
  return (
    <Box
      id="contact"
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
            icon={faEnvelope}
            color={`${theme.palette.background[200]}`}
          />
          <Typography
            sx={{
              ml: 1,
              fontSize: "14px",
            }}
          >
            Contact
          </Typography>
        </Box>
        {/* content */}
        <Box
          sx={{
            color: `${theme.palette.white[500]}`,
            mt: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            Hire Me.
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                mr: 7,
                color: `${theme.palette.text[200]}`,
                fontSize: "14px",
              }}
            >
              Call me:
            </Typography>
            <Typography
              sx={{
                color: `${theme.palette.text[100]}`,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              +251935046337
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography
              sx={{
                mr: 2,
                color: `${theme.palette.text[200]}`,
                fontSize: "14px",
              }}
            >
              Contact Email:
            </Typography>
            <Typography
              sx={{
                color: `${theme.palette.text[100]}`,
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              cherumelketsedek@gmail.com
            </Typography>
          </Box>
          {/* form started */}
          <form onSubmit={handleFormSubmit} ref={formRef}>
            <Box
              sx={{
                mt: 4,
                "& .Mui-focused": {
                  backgroundColor: "red",
                  height: "60px",
                },
                width: { xs: "99%", sm: "99%", md: "99%", lg: "80%" },
              }}
            >
              <FormControl fullWidth>
                <input
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    paddingLeft: "20px",
                    marginBottom: "20px",
                    color: `${theme.palette.text[200]}`,
                    backgroundColor: `${theme.palette.background[500]}`,
                    border: `1px solid ${theme.palette.text[200]}`,
                    borderRadius: "10px",
                    width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
                    height: "45px",
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <input
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    paddingLeft: "20px",
                    marginBottom: "20px",
                    color: `${theme.palette.text[200]}`,
                    backgroundColor: `${theme.palette.background[500]}`,
                    border: `1px solid ${theme.palette.text[200]}`,
                    borderRadius: "10px",
                    width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
                    height: "45px",
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                {" "}
                <input
                  placeholder="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  style={{
                    paddingLeft: "20px",
                    marginBottom: "20px",
                    color: `${theme.palette.text[200]}`,
                    backgroundColor: `${theme.palette.background[500]}`,
                    border: `1px solid ${theme.palette.text[200]}`,
                    borderRadius: "10px",
                    width: { xs: "100%", sm: "100%", md: "100%", lg: "80%" },
                    height: "45px",
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    paddingLeft: "20px",

                    paddingTop: "20px",
                    marginBottom: "20px",
                    color: `${theme.palette.text[200]}`,
                    backgroundColor: `${theme.palette.background[500]}`,
                    border: `1px solid ${theme.palette.text[200]}`,
                    borderRadius: "10px",
                    width: { xs: "90%", sm: "100%", md: "100%", lg: "97%" },
                    height: "120px",
                  }}
                />
              </FormControl>
            </Box>
            <Button
              disabled={canSend}
              type="submit"
              variant="contained"
              sx={{
                width: "200px",
                height: "45px",
                fontSize: "17px",
                fontWeight: "italic 600",
                color: `${theme.palette.text[500]}`,
                borderRadius: "30px",
                "&:hover": {
                  border: `2px solid ${theme.palette.primary[500]}`,
                  backgroundColor: `${theme.palette.background[500]}`,
                  color: `${theme.palette.primary[500]}`,
                },
              }}
            >
              {isSending ? (
                <CircularProgress
                  sx={{
                    color: `${theme.palette.text[500]}`,
                    "&:hover": {
                      color: `${theme.palette.white[500]}`,
                    },
                  }}
                />
              ) : (
                "Send Now"
              )}
            </Button>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose}>
              Your message Successfully sent.Thanks
            </Alert>
          </Snackbar>
          <Snackbar
            open={errorOpen}
            autoHideDuration={7000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="error">
              Error! your message not sent.please try again
            </Alert>
          </Snackbar>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
