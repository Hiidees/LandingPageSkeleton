import { GlobalStyles } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "./Themes/MainTheme";
import { AppProvider } from "./Providers/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: "url(" + "/Blue.jpg" + ")",
            backgroundRepeat: "no-repeat",
          },
        }}
      />
      <AppProvider />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
