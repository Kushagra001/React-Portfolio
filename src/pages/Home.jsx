// Home.js
import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Box } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <SocialIcons />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <SpeedDials />
        </Box>
        <Resume />
      </div>
      <SideNavbar />
      <Works />
      <About />
      <Contact />
    </>
  );
}
