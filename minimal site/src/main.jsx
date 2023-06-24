import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import TitleBody from "./Components/TitleBody.jsx";
import Products from "./Components/Products.jsx";
import ContactForm from "./Components/ContactForm.jsx";
import { formSubmitter } from "./Components/ContactForm.jsx";
import "./index.css";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TitleBody />,
      },
      { path: "/contact", element: <ContactForm />, action: formSubmitter },
      { path: "/products", element: <Products /> },
    ],
  },
]);
// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <TitleBody />,
//       },
//       { path: "/:products", element: <Products /> },
//       { path: "/:contact", element: <ContactForm /> },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
