import { SxProps, Typography } from "@mui/material";
interface TitleContentProps {
  children: React.ReactNode;
  style?: SxProps;
}
const defaultStyle: SxProps = {
  color: "#52AFC2",
  fontSize: "28px",
  textAlign: "center",
  mt: 2,
};
export default function TitleContent({ children, style }: TitleContentProps) {
  return (
    <Typography variant="h6" sx={style || defaultStyle}>
      {children}
    </Typography>
  );
}
