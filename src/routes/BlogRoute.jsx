import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "../screens/BlogHome";
import BlogPage from "../screens/BlogPage";

const BlogRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<BlogHome />} />
          <Route path="/" element={<BlogHome />} />
          <Route path="/blog/:blogid" element={<BlogPage />} />

          <Route path="*" element={<>404 - given route not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default BlogRoute;
