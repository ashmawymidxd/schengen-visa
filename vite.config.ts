import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libraries
          react: ["react", "react-dom", "react-router-dom"],
          // UI library chunk
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
          ],
          // Icons chunk
          icons: ["lucide-react"],
          // Utils chunk
          utils: ["clsx", "tailwind-merge"],
          // Swiper chunk (it's quite large)
          swiper: ["swiper"],
        },
      },
    },
    // Optimize the build
    target: "esnext",
    minify: "esbuild",
    sourcemap: mode === "development",
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Performance optimizations for development
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "clsx",
      "tailwind-merge",
    ],
  },
}));
