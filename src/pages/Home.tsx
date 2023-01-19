import React from "react";

import backpack from "../assets/backpack.jpg";
import jacket from "../assets/jacket.jpg";
import wristband from "../assets/wristband.jpg";
import ring from "../assets/ring.jpg";
import drive from "../assets/drive.jpg";
import backgroundImg from "../assets/legs.jpg";

import "../App.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "../components/hero/Hero";

const styles = {
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundColor: "#c4cbd1",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    height: "50vh",
    paddingTop: "100px",
  },
};

export default function Home() {
  return (
    <Hero/>
  );
}
