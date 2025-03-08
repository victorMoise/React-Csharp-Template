import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import SidebarAndHeader from "./SidebarAndHeader/SidebarAndHeader";
import { pageBackground } from "../../constants/colors";
import { darkTheme, lightTheme } from "../../theme";
import useDarkMode from "../../hooks/useDarkMode"; // Import the custom hook

const PageContent = ({ pageTitle, children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the custom hook

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SidebarAndHeader
          pageTitle={pageTitle}
          onSetIsDarkMode={toggleDarkMode} // Use the toggle function
          isDarkMode={isDarkMode}
        />

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginTop: { xs: "56px", sm: "64px" },
            backgroundColor: pageBackground,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PageContent;
