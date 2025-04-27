import ReactQueryProvider from "@/providers/react-query.provider.tsx";
import ReduxProvider from "@/providers/redux.provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { Ban, Check } from "lucide-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <ReactQueryProvider>
        <Toaster
          icons={{
            success: <Check />,
            error: <Ban />,
          }}
        />
        <App />
      </ReactQueryProvider>
    </ReduxProvider>
  </StrictMode>
);
