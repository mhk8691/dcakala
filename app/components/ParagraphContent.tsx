import { Box, SxProps, Typography } from "@mui/material";
interface ParagraphProps {
  children: React.ReactNode;
  style?: SxProps;
}
const defaultStyle: SxProps = {
  fontSize: "18px",
  direction: "rtl",
  px: {
    xxs: 1,
    sm: 3,
  },
  whiteSpace: "pre-wrap",
  mt: 1,
  lineHeight: {
    xxs: "35px",
    sm: '29px',
  },
  fontWeight: "500",
  
};
export default function ParagraphContent({ children, style }: ParagraphProps) {
  const finalStyle = { ...defaultStyle, ...style };
  return (
    <Typography
      component={"pre"}
      variant="body1"
      color="initial"
      sx={finalStyle}
    >
      {children}
    </Typography>
  );
}
