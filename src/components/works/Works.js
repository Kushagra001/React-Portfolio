/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Linkify from '../../assets/recentprojects/linkify.png';
import Chatbot from '../../assets/recentprojects/chatbot.png';
import FoodApp from '../../assets/recentprojects/foodApp.png';
import JobTracker from '../../assets/recentprojects/jobTrackerAssistant.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Developed a ReactJS portfolio with interactive design.
      Integrated Three.js to create smooth 3D background effects.
      Showcased modern UI with a focus on performance and visuals.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Linkify Project', 
      description: `Built a real-time chat app using the MERN stack.
      Integrated Socket.io for seamless, low-latency messaging.
      Designed with authentication and scalable chat features.`,
      alter: 'Linkify Project',
      image: `${Linkify}`,

    },
    { 
      id: 3,
      title: 'Chatbot Project', 
      description: `Developed an intelligent chatbot using MERN stack.
      Integrated OpenAI API to handle queries and coding questions.
      Delivered interactive, AI-driven assistance with smooth UI.`,
      alter: 'Chatbot Project',
      image: `${Chatbot}`,
    },
    { 
      id: 4,
      title: 'Food App Project', 
      description: `Developed a food ordering UI using ReactJS.
      Designed category filters, top picks, and cart/profile pages.
      Created a clean, responsive interface inspired by modern food-delivery apps.`,
      alter: 'Food App Project',
      image: `${FoodApp}`,
    },
    { 
      id: 5,
      title: 'Job Tracker Assistant', 
      description: `Developed a app to organize and track job applications.
      Includes an interactive dashboard for monitoring progress and success rates.
      Integrated resume management with AI-powered review and job matching.`,
      alter: 'Job Tacker Assistant',
      image: `${JobTracker}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
