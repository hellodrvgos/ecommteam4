import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className="footer">
      <Paper
        sx={{
          width: "100%",
          height: "50px",
          position: "fixed",
          bottom: 0,
        }}
        component="footer"
        square
        // variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              color: "#5f869b",
              my: 1,
            }}
          >
            <div className="icon">
              <FacebookIcon
                sx={{
                  marginLeft: "22px",
                  marginRight: "22px",
                }}
              />
              <InstagramIcon
                sx={{
                  marginLeft: "22px",
                  marginRight: "22px",
                }}
              />
              <TwitterIcon
                sx={{
                  marginLeft: "22px",
                  marginRight: "22px",
                }}
              />
            </div>

            <Typography variant="caption" color="#5f869b">
              Copyright &copy; 2023.
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
}
