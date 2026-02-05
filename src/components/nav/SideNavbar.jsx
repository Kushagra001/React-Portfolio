/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { slideInLeft, buttonVariants } from "../../utils/motionVariants";
import { ThemeToggle } from "../theme/ThemeToggle";

import "./SideNavbar.css";

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

export const SideNavbar = () => {
  const { classes } = useStyles();
  const links = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'works' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow fade in to match rotated aesthetic
    >
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <Typography>Home</Typography>
      </Link>
      {links.map((link) => (
        <Link key={link.to} activeClass="active" to={link.to} spy={true} smooth={true} offset={-70} duration={500}>
          <Typography>{link.name}</Typography>
        </Link>
      ))}
    </motion.nav>
  );
};