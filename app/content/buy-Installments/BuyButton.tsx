import { Button } from "@mui/material";
export default function BuyButton() {
  return (
    <>
      <Button
      
        variant="contained"
        size="large"
        sx={{
          bgcolor: "primary.dark",
          color: "black",
          borderRadius: 3,
          transition: "background-color 0.4s ease-in-out",
          px: 5,
          "&:hover": {
            bgcolor: "#33B3A6",
            color: "white",
          },
        }}
      >
        شروع خرید اقساطی
      </Button>
    </>
  );
}
