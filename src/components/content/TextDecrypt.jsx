import { useTheme } from "@material-ui/core/styles";
import { ReactTyped } from "react-typed";

export const TextDecrypt = ({ text }) => {
  const theme = useTheme(); 

  return (
    <span style={{ color: theme.palette.text.primary }}>
      {Array.isArray(text) ? (
        <ReactTyped
          strings={text}
          typeSpeed={80}
          backSpeed={40}
          showCursor={false} 
        />
      ) : (
        text
      )}
    </span>
  );
};

export default TextDecrypt;