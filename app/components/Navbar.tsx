import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const navbarStyle: SxProps = {
  bgcolor: "primary.dark",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 1.7,
  px: 2,
};
const cartBtnStyle: SxProps = {
  bgcolor: "#ffffff",
  minWidth: "40px",
  py: 0.6,
  px: 0,
  borderRadius: ".5rem",
};
const loginBtnStyle: SxProps = {
  borderRadius: "1rem",
  bgcolor: "#ffffff",
  px: 1.1,
  py: 1,
  ml: 2,
};
const searhInputStyle: SxProps = {
  width: "100%",
  px: 1.2,
  border: "none",
  direction: "rtl",
  "&:focus-visible": {
    outline: "none",
    border: "none",
  },
  "&::placeholder": {
    opacity: ".8",
    fontSize: "12px",
    textAlign: "center",
  },
};

function SearchBar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      bgcolor={"white"}
      p={0.4}
      borderRadius={4}
      py={0.9}
    >
      <SearchIcon fontSize="medium" sx={{ color: "primary.dark" }} />
      <Box
        component={"input"}
        type="text"
        placeholder="جستجو در دی سی ای کالا"
        sx={searhInputStyle}
      />
    </Stack>
  );
}

export default function Navbar() {
  return (
    <Box sx={navbarStyle}>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Button variant="contained" size="small" sx={cartBtnStyle}>
          <ShoppingCartOutlinedIcon color="secondary" />
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={loginBtnStyle}
          endIcon={<AccountCircleIcon fontSize="large" color="secondary" />}
        >
          <Typography variant="body2" sx={{ opacity: ".8", fontSize: "14px" }}>
            وارد شوید
          </Typography>
        </Button>
        <Stack flexDirection={"row"} alignItems={"center"} ml={2}>
          <CallIcon sx={{ color: "white" }} />
          <Typography variant="body1" color="white">
            02172195
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"55%"}>
        <SearchBar />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Link href={'/'}>
          <img
            src="https://dashboard.dcakala.com/public/images/setting/dcakala-logo-new-ns/2024/09/dcakala-logo-new-ns_original.png"
            alt="logo"
            style={{ width: "90px", height: "100%", marginRight: "50px" }}
          />
        </Link>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            cursor: "pointer",
            transition: ".2s",
            "&:hover": {
              opacity: ".7",
            },
          }}
        >
          <Typography
            variant="body2"
            color="white"
            sx={{ fontSize: "12px", mr: 1 }}
          >
            دسته بندی محصولات
          </Typography>
          <MenuIcon sx={{ color: "white" }} />
        </Stack>
      </Stack>
    </Box>
  );
}
