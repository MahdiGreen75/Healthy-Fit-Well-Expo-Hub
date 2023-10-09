import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import FormValidationProvider from "./Providers/FormValidationProvider";
import UseLocation from "./Providers/UseLocation";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UseLocation>
        <FormValidationProvider>
          <RouterProvider router={router} />
        </FormValidationProvider>
      </UseLocation>
    </AuthProvider>
  </React.StrictMode>
);