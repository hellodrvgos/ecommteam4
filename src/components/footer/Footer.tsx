import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <div className="footer">
            <Paper
                sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                }} component="footer" square variant="outlined">
                <Container maxWidth="lg">
                    <Box
                        sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                        }}
                    >
                        <div className="icon">
                            <FacebookIcon />
                            <InstagramIcon sx={{ marginLeft: '22px', marginRight: '22px' }} />
                            <TwitterIcon />
                        </div>
                    </Box>

                    <Box
                        sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="initial"
                        >
                            Copyright &copy; 2023.
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}