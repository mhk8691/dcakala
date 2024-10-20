import { Box, SxProps, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
interface ParagraphProps {
  children: React.ReactNode;
  style?: SxProps;
}
const defaultStyle: SxProps = {
  fontSize: "18px",
  direction: "rtl",
  px: 3,
  whiteSpace: "pre-wrap",
};
export default function ParagraphContent({ children, style }: ParagraphProps) {
  return (
    <Typography
      component={"pre"}
      variant="body1"
      color="initial"
      sx={style || defaultStyle}
    >
      {children}
    </Typography>
  );
}
