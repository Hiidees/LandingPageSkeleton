import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppBar from "@mui/material/AppBar";
import {
  DividerVerticalFooterStyle,
  IconButtonFooterStyle,
  ListSocialFooterStyle,
  ToolbarFooterStyle,
  TypographyFooterStyle,
} from "../../Commons/Styleds/FooterStyles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  const matches = useMediaQuery("(min-height:600px)");

  return (
    <React.Fragment>
      {matches && (
        <AppBar position="static">
          <Container maxWidth="md">
            <Toolbar sx={ToolbarFooterStyle} variant="dense">
              <Box>
                <List
                  sx={ListSocialFooterStyle}
                  component={Stack}
                  direction="row"
                >
                  <IconButton sx={IconButtonFooterStyle} disableRipple>
                    <InstagramIcon />
                  </IconButton>

                  <Divider
                    sx={DividerVerticalFooterStyle}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />

                  <IconButton sx={IconButtonFooterStyle} disableRipple>
                    <FacebookOutlinedIcon />
                  </IconButton>

                  <Divider
                    sx={DividerVerticalFooterStyle}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                  <IconButton sx={IconButtonFooterStyle} disableRipple>
                    <LinkedInIcon />
                  </IconButton>
                </List>
              </Box>

              <Typography sx={TypographyFooterStyle} color="inherit">
                © 2021 Landing Page Skeleton
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </React.Fragment>
  );
}
