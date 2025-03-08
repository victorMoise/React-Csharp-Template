import React, { useCallback, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import SidebarAndHeader from "./SidebarAndHeader";
import { pageBackground } from "../../constants/colors";
import { darkTheme, lightTheme } from "../../theme";

const PageContent = ({ pageTitle, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSetDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SidebarAndHeader pageTitle={pageTitle} onSetIsDarkMode={handleSetDarkMode} isDarkMode={isDarkMode}/>

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
