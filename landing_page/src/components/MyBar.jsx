import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useState, useEffect } from "react";
import "./MyBar.css";

export default function MyBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      sx={{
        background: scrolled ? "rgba(0, 0, 0, 0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none", // Add blur effect on scroll
        transition: "background 0.3s ease, backdrop-filter 0.3s ease", // Smooth transition
        boxShadow: "none",
        position: "fixed",
      }}
    >
      <Toolbar sx={{ margin: "auto" }}>
        <Button
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            paddingX: 2,
            paddingY: 1,
          }}
          onClick={() => navigate("/")}
          startIcon={<HomeOutlinedIcon className="svg_icons" />}
        >
          Home
        </Button>
        <Button
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            paddingX: 2,
            paddingY: 1,
          }}
          onClick={() => navigate("/projects")}
          startIcon={<LightbulbOutlinedIcon className="svg_icons" />}
        >
          Projects
        </Button>
        <Button
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            paddingX: 2,
            paddingY: 1,
          }}
          onClick={() => navigate("/resume")}
          startIcon={<DescriptionOutlinedIcon className="svg_icons" />}
        >
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
}
