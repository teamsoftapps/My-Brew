import React from "react";
import { Routes, Route } from "react-router-dom";
import ShareableBrew from "../Screens/shareableBrew";

const PublicStack = () => {
  return (
    <Routes>
      <Route path="/products/getBrew/:slug" element={<ShareableBrew />} />
    </Routes>
  );
};

export default PublicStack;
