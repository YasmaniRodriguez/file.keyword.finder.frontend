import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DialogContextProvider } from "./contexts/DialogContext";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Order from "./containers/Order/Order";
import "./App.css";

function App() {
  return (
    <SnackBarContextProvider>
      <DialogContextProvider>
        <BrowserRouter>
          <Header />
          <Main>
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </Routes>
          </Main>
          <Footer />
        </BrowserRouter>
      </DialogContextProvider>
    </SnackBarContextProvider>
  );
}

export default App;
