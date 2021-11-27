import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/system";

export const MyCard = styled(Card)({
  background: "transparent",
});

export const BoxMedia = styled(Box)({
  display: "block",
  flexDirection: "column",
});

export const MyCardMedia = styled(CardMedia)<any>({
  width: 200,
});

export const MyCardContent = styled(CardContent)({
  marginTop: 20,
});
