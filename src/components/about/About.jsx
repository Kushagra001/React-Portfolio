import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import { fadeInUp, staggerContainer, scaleIn } from "../../utils/motionVariants";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  aboutText: {
    color: theme.palette.text.primary,   // 👈 will auto-toggle
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginTop: theme.spacing(2),
  },
}));


export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a web developer who loves building interactive and scalable apps.
   I work with React, Node.js, and MongoDB, and enjoy exploring new tools like Socket.io and OpenAI APIs. 
   Always curious and up for a challenge, I create projects that blend clean design with solid functionality.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <motion.div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
          <motion.div
            className="_content_wrapper"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Typography component='h2' variant="h5">
                <TextDecrypt text={`${greetings}`} />
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography component="p" variant="body1" className={classes.aboutText}>
                {aboutme}
              </Typography>
            </motion.div>
            <motion.a
              href="#contact"
              className="contact-btn"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
