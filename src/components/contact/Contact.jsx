/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { fadeInUp, staggerContainer, buttonVariants } from "../../utils/motionVariants";

import "./Contact.css";

// inside useStyles
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
    color: theme.palette.text.primary,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  formfield: {
    width: "100%",
    marginBottom: "1rem",
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
    },
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textTransform: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  contactMsg: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(6), // 👈 moves text left
    textAlign: "left",
    fontSize: "2.5rem",           // 👈 bigger text
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
}));


export const Contact = () => {
  const classes = useStyles();
  const greetings = "Get in touch!";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bezxog",
        "template_jmsk313",
        form.current,
        "knwNTK4YU4K30HYMd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500,
    });

    e.target.reset();
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <motion.div
            className="_form_wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                label="Message"
                multiline
                minRows={5}
                size="small"
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  type="submit"
                  className={classes.submitBtn}
                  startIcon={<i className="fas fa-terminal"></i>}
                >
                  Send
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.h1
            className={classes.contactMsg}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextDecrypt text={greetings} />
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};
