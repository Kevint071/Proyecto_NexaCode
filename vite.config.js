import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const isProduction = mode === "production";
  // const base = isProduction
  //   ? "https://Kevint071.github.io/Proyecto_NexaCode/"
  //   : "/";

  return {
    plugins: [react()],
    base: "/Proyecto_NexaCode/",
  };
}); 
