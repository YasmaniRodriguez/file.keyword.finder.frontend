import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppContextProvider } from "./contexts/AppContext";
import { DialogContextProvider } from "./contexts/DialogContext";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackBarContextProvider>
        <AppContextProvider>
          <DialogContextProvider>
            <BrowserRouter>
              <Header />
              <Main>
                <Routes>
                  <Route path="" element={<Home />}></Route>
                </Routes>
              </Main>
              <Footer />
            </BrowserRouter>
          </DialogContextProvider>
        </AppContextProvider>
      </SnackBarContextProvider>
    </ThemeProvider>
  );
}

export default App;
