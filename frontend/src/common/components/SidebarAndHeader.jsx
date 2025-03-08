import React, { useCallback, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
  Toolbar,
  AppBar,
} from "@mui/material";
import { map } from "ramda";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import { Logout } from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import {
  buttonBackground,
  headerBackground,
  headerColor,
  sidebarBackground,
  sidebarColor,
  textColor,
} from "../../constants/colors";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SidebarAndHeader = (props) => {
  const { t } = useTranslation("common");
  const { pageTitle, onSetIsDarkMode, isDarkMode } = props;
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const menuItems = [
    {
      label: `${t("Sidebar.Home")}`,
      icon: <HomeIcon />,
      onClick: () => {
        navigate("/home");
      },
    },
    {
      label: `${t("Sidebar.Profile")}`,
      icon: <PersonIcon />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      label: `${t("Sidebar.Logout")}`,
      icon: <Logout />,
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* HeaderBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: headerBackground,
          color: headerColor,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: isMobile ? "100%" : `calc(100% - ${isOpen ? 240 : 60}px)`,
          transition: "width 0.3s ease",
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          {/* Sidebar Toggle Button for Mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleSidebar}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              padding: 1,
            }}
          >
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={onSetIsDarkMode}
              size={30}
            />
            <LanguageSelector textColor={textColor} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        sx={{
          width: isOpen ? (isMobile ? "240px" : 240) : 60,
          flexShrink: 0,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          "& .MuiDrawer-paper": {
            width: isOpen ? (isMobile ? "240px" : 240) : 60,
            boxSizing: "border-box",
            backgroundColor: sidebarBackground,
            color: sidebarColor,
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            transition: "width 0.3s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Divider />
          <List sx={{ paddingTop: "62px" }}>
            {map(
              (item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={item.onClick}
                  sx={{
                    justifyContent: isOpen ? "flex-start" : "center",
                    color: textColor,
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                    cursor: "pointer",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: isOpen ? "40px" : "0",
                      justifyContent: isOpen ? "flex-start" : "center",
                      color: textColor,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {isOpen && <ListItemText primary={item.label} />}
                </ListItem>
              ),
              menuItems
            )}
          </List>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Sidebar Toggle Button for Desktop */}
          {!isMobile && (
            <IconButton
              onClick={toggleSidebar}
              sx={{
                backgroundColor: buttonBackground,
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                margin: isOpen ? "0 auto" : "0",
              }}
            >
              {isOpen ? (
                <ArrowBackIcon color={textColor} />
              ) : (
                <ArrowForwardIcon color={textColor} />
              )}
            </IconButton>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default SidebarAndHeader;
