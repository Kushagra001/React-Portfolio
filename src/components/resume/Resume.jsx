import React from 'react';
import { makeStyles } from "tss-react/mui";
import { Typography, Link } from '@mui/material';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDF from '../../assets/Kushagra_Singh_Negi_Resume.pdf';
// ...existing code... // Adjust the path as necessary
import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles()((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const { classes } = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href= {`${ResumePDF}`}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>
  );
};
