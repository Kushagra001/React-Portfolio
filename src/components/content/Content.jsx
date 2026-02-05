import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import { fadeInUp, staggerContainer } from "../../utils/motionVariants";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
  },
}));

export const Content = () => {
  const classes = useStyles();
  const theme = useTheme(); // ✅ get current theme

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <motion.div
        className={classes.heading}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <Typography
            variant="h5"
            component="h2"
            style={{ color: theme.palette.text.primary }} // ✅ text follows theme
          >
            <TextDecrypt text={`${FirstName} ${LastName}`} />
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.jobs}
            style={{ color: theme.palette.text.primary }} // ✅ text follows theme
          >
            <TextDecrypt
              text={[
                Resume.basics.job1,
                Resume.basics.job2,
                "Web Developer",
              ]}
            />
          </Typography>
        </motion.div>
      </motion.div>
    </Container>
  );
};
