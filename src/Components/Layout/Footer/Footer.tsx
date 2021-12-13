import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import BluetoothConnectedOutlinedIcon from "@mui/icons-material/BluetoothConnectedOutlined";
import React from "react";
import {
  MyFooter,
  MyToolbar,
  MyIconButton,
  MyDivider,
  MyTypography,
  MyList,
} from "./FooterStyles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
                <MyList component={Stack} direction="row">
                  <MyIconButton disableRipple>
                    <InstagramIcon />
                  </MyIconButton>

                  <MyDivider orientation="vertical" variant="middle" flexItem />

                  <MyIconButton disableRipple>
                    <FacebookOutlinedIcon />
                  </MyIconButton>

                  <MyDivider orientation="vertical" variant="middle" flexItem />
                  <MyIconButton disableRipple>
                    <LinkedInIcon />
                  </MyIconButton>
                </MyList>
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
