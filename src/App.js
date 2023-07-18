import React from "react";
import Homepage from "./pages/HomePage/Homepage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import BrowsePage from "./pages/BrowsePage/BrowsePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/browse" element={<BrowsePage />} />
        <Route exact path="/signup" element={<SignUpPage />} />

        {/* <SignInPage /> */}
        {/* <SignUpPage /> */}
        {/* <BrowsePage /> */}
      </Routes>
    </BrowserRouter>
  );
}
