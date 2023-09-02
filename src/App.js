import { Box } from "@mui/material";
import React from "react";
import MainWrapper from "./MainWrapper";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import Projects from "./pages/Projects";

import Contact from "./pages/Contact";
const App = () => {
  // here routing is not nessary for this project for now
  // but it already included
  return (
    <Box>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<MainWrapper />}>
              {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
};

export default App;
