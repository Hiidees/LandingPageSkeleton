import { Box, Container, List, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import BluetoothConnectedOutlinedIcon from "@mui/icons-material/BluetoothConnectedOutlined";
import React from "react";
import {
  MyFooter,
  MyToolbar,
  MyListItemIcon,
  MyDivider,
  MyTypography,
} from "./FooterStyles";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  const matches = useMediaQuery("(min-height:600px)");

  return (
    <React.Fragment>
      {matches && (
        <MyFooter position="static">
          <Container maxWidth="md">
            <MyToolbar variant="dense">
              <Box>
                <List
                  component={Stack}
                  sx={{
                    justifyContent: "center",
                  }}
                  direction="row"
                >
                  <MyListItemIcon>
                    <InstagramIcon />
                  </MyListItemIcon>

                  <MyDivider orientation="vertical" variant="middle" flexItem />

                  <MyListItemIcon>
                    <FacebookOutlinedIcon />
                  </MyListItemIcon>

                  <MyDivider orientation="vertical" variant="middle" flexItem />
                  <MyListItemIcon>
                    <BluetoothConnectedOutlinedIcon />
                  </MyListItemIcon>
                </List>
              </Box>

              <MyTypography color="inherit">
                © 2021 Landing Page Skeleton
              </MyTypography>
            </MyToolbar>
          </Container>
        </MyFooter>
      )}
    </React.Fragment>
  );
}
