//Drawer Region
export const DrawerStyle = {
  display: { sm: "none", md: "none" },
} as const;

export const PaperDrawerStyle = {
  backgroundColor: "rgb(13,83,178)",
  borderTopRightRadius: 6,
  borderBottomRightRadius: 6,
  height: "100%",
} as const;

export const DividerRowDrawerStyle = {
  backgroundColor: "#acc7fe",
} as const;

export const ListItemIconDrawerStyle = {
  color: "#011230",
} as const;

export const ButtonDrawerStyle = {
  display: { sm: "none", md: "none" },
  "&:hover": {
    background: "none",
    color: "#042057",
  },
} as const;

export const BoxDrawerStyle = {
  width: 250,
} as const;

export const ListNameDrawerStyle = {
  color: "#acc7fe",
} as const;

export const ListLinkDrawerStyle = {
  marginTop: 2,
  color: "#acc7fe",
  height: "auto",
  marginBottom: "auto",
} as const;

export const ListButtonDrawerStyle = {
  "&:hover": {
    color: "black",
    backgroundColor: "#acc7fe",
  },
} as const;

export const ListSocialDrawerStyle = {
  color: "white",
  position: "absolute",
  bottom: 0,
  marginLeft: "32px",
} as const;

export const IconButtonDrawerStyle = {
  color: "#acc7fe",
  minWidth: "0px",
  padding: "8px 16px",
  "&:hover": { color: "#042057" },
} as const;

export const DividerVerticalDrawerStyle = {
  backgroundColor: "black",
} as const;

//end Drawer Region

//AppBar Region
export const BoxAppBarStyle = {
  flexGrow: 1,
} as const;

export const ToolbarDesktopAppBarStyle = {
  justifyContent: "center",
} as const;

export const ToolbarMobileAppBarStyle = {
  justifyContent: "right",
} as const;

export const ButtonAppBarStyle = {
  "&:hover": {
    background: "none",
    color: "#8b46fa",
    textDecoration: "underline",
    textUnderlineOffset: 10,
  },
} as const;

//end AppBar Region
