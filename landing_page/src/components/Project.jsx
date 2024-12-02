import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import "./project.css";
export default function Project({
  headline,
  subHeadline,
  img,
  text,
  link,
  gif,
}) {
  return (
    <Card
      sx={{
        background: "#00000060",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: "0",
        border: 2,
        borderRadius: 5,
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid size={{ xxs: 12, md: 6 }}>
          <CardHeader
            sx={{ color: "white" }}
            title={headline}
            titleTypographyProps={{ sx: { fontSize: "2rem" } }}
            subheader={subHeadline}
            subheaderTypographyProps={{
              sx: { color: "lightgray", fontSize: "1.2rem" },
            }}
          ></CardHeader>
        </Grid>
        <Grid
          size={{ xxs: 12, md: 6 }}
          sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        >
          <img className="gif" src={gif}></img>
        </Grid>
        <CardContent>
          <Typography
            sx={{ fontSize: "1.2rem", color: "white" }}
            variant="body2"
          >
            {text}
          </Typography>
        </CardContent>
      </Grid>
      <CardActions
        sx={{ justifyContent: "center", paddingBottom: 2 }}
      ></CardActions>{" "}
      <Button
        variant="outlined"
        href={link}
        target="_blank"
        rel="noopener"
        sx={{
          textTransform: "none",
          color: "white",
          borderColor: "black",
          borderBottom: "0px",
          borderLeft: "0px",
          borderRight: "0px",
        }}
        startIcon={<GitHubIcon />}
      >
        GitHub Repository
      </Button>
    </Card>
  );
}
