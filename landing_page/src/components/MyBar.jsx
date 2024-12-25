import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./MyBar.css";
import GithubCorner from "react-github-corner";

export default function MyBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeOutlinedIcon />, onClick: () => navigate("/") },

    {
      text: "Skills",
      icon: <BoltIcon />,
      onClick: () => navigate("/skills"),
    },
    {
      text: "Projects",
      icon: <LightbulbOutlinedIcon />,
      onClick: () => navigate("/projects"),
    },
    {
      text: "Resume",
      icon: <DescriptionOutlinedIcon />,
      onClick: () => navigate("/resume"),
    },
  ];

  return (
    <>
      <AppBar
        sx={{
          background: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
          boxShadow: "none",
          position: "fixed",
        }}
      >
        <GithubCorner href="https://github.com/SimonFraiberg/Portfolio" />

        <Toolbar className="toolbar">
          {isMobile ? (
            <>
              <IconButton
                sx={{ position: "absolute", left: 0, p: 0 }}
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ float: "left" }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List className="drawer">
                  {menuItems.map((item, index) => (
                    <ListItem
                      sx={{ marginRight: "20px" }}
                      button
                      key={index}
                      onClick={() => {
                        item.onClick();
                        setDrawerOpen(false);
                      }}
                    >
                      <ListItemIcon sx={{ color: "white" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    textTransform: "none",
                    color: "white",
                    fontSize: "1.2rem",
                    px: 2,
                    py: 1,
                    border: 0,

                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      background: "transparent",
                      border: 0,
                    },
                  }}
                  onClick={item.onClick}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
