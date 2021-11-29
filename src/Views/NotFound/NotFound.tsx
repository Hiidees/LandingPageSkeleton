import * as React from "react";
import Typography from "@mui/material/Typography";

export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <Typography variant="h1" color="initial">
      404- Not Found
    </Typography>
  );
}
