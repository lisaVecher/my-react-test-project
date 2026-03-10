// main.tsx

// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <div>
//     <h1>Welcome to React</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules!
//     </p>
//   </div>,
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./components/App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// src/main.tsx

// import { createRoot } from "react-dom/client";
// import App from "./components/App";

// createRoot(document.getElementById("root") as HTMLElement).render(<App />);

// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
