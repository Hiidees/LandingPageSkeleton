import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const MyFooter = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  color: "#d1dffb",
  marginTop: 3,
});

export const MyToolbar = styled(Toolbar)({
  display: "block",
});

export const MyListItemIcon = styled(ListItemIcon)({
  color: "#d1dffb",
  minWidth: "0px",
  padding: "8px 16px",
  "&:hover": { color: "#042057" },
});

export const MyDivider = styled(Divider)({
  backgroundColor: "black",
});

export const MyTypography = styled(Typography)({
  textAlign: "center",
});

export const MyList = styled(List)<any>({
  justifyContent: "center",
});
