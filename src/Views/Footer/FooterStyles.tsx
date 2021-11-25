import { Box, styled } from "@mui/system";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  StackProps,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

type ExtraProps = {
  component: React.ElementType;
  propsStack: StackProps;
};

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
});

export const MyDivider = styled(Divider)({
  backgroundColor: "black",
});

export const MyTypography = styled(Typography)({
  textAlign: "center",
});
