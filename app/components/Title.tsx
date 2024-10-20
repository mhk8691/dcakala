import { Typography, SxProps } from "@mui/material";
const titleStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontSize: "14px",
  mt: 2,

  "&:before, &:after": {
    content: '""',
    flexGrow: 1,
    height: "1px",
    backgroundColor: "#000000",
  },
};
export default function Title({ title }: { title: string }) {
  return (
    <Typography variant="h6" color="initial" sx={titleStyle}>
      {title}
    </Typography>
  );
}
