import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import "./Footer.css";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1A2027",
        color: "#fff",
        marginTop: "auto",
        paddingTop: 3,
        width: "100%",
        zIndex: 2000,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4} sx={{ pr: 3 }}>
          <Typography variant="h6" textAlign="center">
            Contact Me
          </Typography>
          <Typography variant="body2" textAlign="center">
            Email: simonfraiberg@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign="center">
          <IconButton
            href="https://www.linkedin.com/in/simon-fraiberg"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon className="footer_icon" />
          </IconButton>
          <IconButton
            href="https://github.com/SimonFraiberg"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon className="footer_icon" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2" color="text.secondary" textAlign="center">
        © {new Date().getFullYear()} Simon Fraiberg. All rights reserved.
      </Typography>
    </Box>
  );
}
