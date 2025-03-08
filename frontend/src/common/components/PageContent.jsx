import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import SidebarAndHeader from "./SidebarAndHeader/SidebarAndHeader";
import { pageBackground } from "../../constants/colors";
import { darkTheme, lightTheme } from "../../theme";
import useDarkMode from "../../hooks/useDarkMode";

const PageContent = ({ pageTitle, children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          height: "100vh", 
          backgroundColor: pageBackground, 
        }}
      >
        {/* Sidebar component */}
        <SidebarAndHeader
          pageTitle={pageTitle}
          onSetIsDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginTop: { xs: "56px", sm: "64px" }, 
            overflowY: "auto", 
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PageContent;
