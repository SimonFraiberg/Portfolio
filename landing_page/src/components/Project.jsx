import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Box } from "@mui/material";

export default function Project({ headline, subHeadline, img, text, link }) {
  return (
    <Card
      sx={{
        m: "5vw",
        marginBottom: "0",
        border: 2,
        borderRadius: 5,
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div>
        <CardHeader title={headline} subheader={subHeadline} />
        <CardMedia
          sx={{ maxWidth: "50vh", margin: "0 auto" }}
          component="img"
          image={img}
          alt={headline}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="body2"
            color="text.secondary"
          >
            {text}
          </Typography>
        </CardContent>
      </div>
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
        }}
        startIcon={<GitHubIcon />}
      >
        GitHub Repository
      </Button>
    </Card>
  );
}
