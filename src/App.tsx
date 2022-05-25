import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DialogContextProvider } from "./contexts/DialogContext";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import Home from "./containers/Home/Home";
import "./App.css";

function App() {
  return (
    <SnackBarContextProvider>
      <DialogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </DialogContextProvider>
    </SnackBarContextProvider>
  );
}

export default App;
