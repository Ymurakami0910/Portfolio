import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "",
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "other-dependencies"],
  },
  build: {
    emptyOutDir: true,
    assetsDir: ".",
  },
});