import { useTheme } from "@mui/material/styles";
import { ReactTyped } from "react-typed";

export const TextDecrypt = ({ text }) => {
  const theme = useTheme();

  return (
    <span style={{ color: theme.palette.text.primary }}>
      {/* Bypass ReactTyped for debugging */}
      {Array.isArray(text) ? text.join(' ') : text}
    </span>
  );
};

export default TextDecrypt;