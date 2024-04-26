import React from "react";
import "./App.css";
import BlogHome from "./screens/BlogHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogRoute from "../src/routes/BlogRoute";
function App() {
  return (
    <>
      <BlogRoute />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
