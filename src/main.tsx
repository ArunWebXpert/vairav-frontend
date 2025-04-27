import App from "./App.tsx";
import ReactQueryProvider from "@/providers/react-query.provider.tsx";
import ReduxProvider from "@/providers/redux.provider.tsx";
import { NuqsAdapter } from "nuqs/adapters/next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <ReactQueryProvider>
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
      </ReactQueryProvider>
    </ReduxProvider>
  </StrictMode>
);
