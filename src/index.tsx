import React from "react";
import ReactDOM from "react-dom/client";
import { RoosterEditor } from "./RoosterEditor";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RoosterEditor />
  </React.StrictMode>
);
