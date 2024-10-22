import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
interface Props {
  style?: SxProps;
  children: React.ReactNode;
}
const defaultStyle: SxProps = {
  px: 2,
  py: 3,
  bgcolor: "#F9F9F9",
  border: 1,
  borderColor: "#CCCCCC",
  borderRadius: 3,
  direction: "rtl",
  mt:2
};
export default function BoxContent({ children, style }: Props) {
  const finalStyle = { ...defaultStyle, ...style };
  return (
    <Box px={2} >
      <Box sx={finalStyle}>{children}</Box>
    </Box>
  );
}
