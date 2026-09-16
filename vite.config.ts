import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// IMPORTANT for GitHub Pages:
// If you deploy to https://<username>.github.io/<repo-name>/
// set base to '/<repo-name>/' (with slashes on BOTH sides).
// If you deploy to a "user site" repo named <username>.github.io,
// or use a custom domain, set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
