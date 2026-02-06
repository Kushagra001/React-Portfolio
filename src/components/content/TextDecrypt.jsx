import { useTheme } from "@mui/material/styles";
// import { ReactTyped } from "react-typed";

export const TextDecrypt = ({ text }) => {
  const theme = useTheme();

  return (
    <span style={{ color: theme.palette.text.primary }}>
      {/* Show only the last item if it's an array (fallback for react-typed removal) */}
      {Array.isArray(text) ? text[text.length - 1] : text}
    </span>
  );
};

export default TextDecrypt;