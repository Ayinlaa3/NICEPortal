// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,   // Vite will always use this port now
    host: true,   // Allows access via LAN IP or 0.0.0.0
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});




// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url"; // Import fileURLToPath to resolve __dirname

// // Simulate __dirname in ES modules
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"), // Add the alias for the "src" folder
//     },
//   },
// });
