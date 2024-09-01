import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sassGlobImport from "vite-plugin-sass-glob-import";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [sassGlobImport(), vue()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            // Fix import errors from vite
            "underscore/modules": "underscore"
        }
    }
});
