import { SxProps, Typography } from "@mui/material";

interface Props {
  style?: SxProps;
  children: React.ReactNode;
}
const defaultStyle: SxProps = {
  color: "primary.dark",
  mt: 1,
  fontSize: "20px",
  direction: "rtl",
  px: {
    xxs: 1,
    sm: 3,
  },
  fontWeight:'bold'
};
export default function SubTitle({ style, children }: Props) {
  const finalStyle = { ...defaultStyle, ...style };
  return (
    <Typography variant="h6" sx={finalStyle}>
      {children}
    </Typography>
  );
}
