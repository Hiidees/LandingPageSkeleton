import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import ListItemButton from "@mui/material/ListItemButton";

export const MyBox = styled(Box)({
  width: 250,
});

export const MyListName = styled(List)({
  color: "#acc7fe",
});

export const MyListLink = styled(List)({
  marginTop: 2,
  color: "#acc7fe",
  height: "auto",
  marginBottom: "auto",
});

export const MyListItemButton = styled(ListItemButton)<any>({
  "&:hover": {
    color: "black",
    backgroundColor: "#acc7fe",
  },
});

export const MyListSocial = styled(List)<any>({
  color: "white",
  position: "absolute",
  bottom: 0,
  marginLeft: "32px",
});

export const MyIconButton = styled(IconButton)({
  color: "#acc7fe",
  minWidth: "0px",
  padding: "8px 16px",
  "&:hover": { color: "#042057" },
});

export const MyDivider = styled(Divider)({
  backgroundColor: "black",
});

export const AppBarStyle = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  color: "#d1dffb",
  marginBottom: 5,
});

export const MyBoxAppbar = styled(Box)({
  flexGrow: 1,
});

export const MyToolbarLarge = styled(Toolbar)({
  justifyContent: "center",
});

export const MyToolbarSmall = styled(Toolbar)({
  justifyContent: "right",
});

export const MyButtonAppBar = styled(Button)({
  "&:hover": {
    background: "none",
    color: "#8b46fa",
    textDecoration: "underline",
    textUnderlineOffset: 10,
  },
});
