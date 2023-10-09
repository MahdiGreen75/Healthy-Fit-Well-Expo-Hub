import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import FormValidationProvider from "./Providers/FormValidationProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FormValidationProvider>
        <RouterProvider router={router} />
      </FormValidationProvider>
    </AuthProvider>
  </React.StrictMode>
);