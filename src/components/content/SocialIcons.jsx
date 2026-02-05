import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import Resume from "../../settings/resume.json";
import { staggerContainer, buttonVariants } from "../../utils/motionVariants";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: "fixed",
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: "2.5rem",
    width: "2.5rem",
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const SocialIcons = () => {
  const classes = useStyles();

  const socialItems = Resume.basics.profiles;

  return (
    <motion.div
      className={classes.socialIcons}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {socialItems.map((socialItem) => (
        <motion.div key={socialItem.network} variants={buttonVariants}>
          <Tooltip
            title={socialItem.network}
            placement="left"
            arrow
          >
            <IconButton
              color="inherit"
              aria-label={socialItem.network}
              className={classes.iconButton}
              href={socialItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </motion.div>
  );
};
