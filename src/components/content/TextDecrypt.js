// src/components/content/TextDecrypt.js
import React from "react";
import { ReactTyped } from "react-typed";

export const TextDecrypt = ({ text }) => {
  const strings = Array.isArray(text) ? text : [text];
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={60}
      backSpeed={30}
      loop={false}
      showCursor={false}
    />
  );
};
