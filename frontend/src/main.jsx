import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OtpContextProvider } from "./context/otpContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <OtpContextProvider>
        <App />
      </OtpContextProvider>
    </LoginContextProvider>
  </StrictMode>
);
