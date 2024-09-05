import { defineConfig } from "vite"
import { djangoVitePlugin } from "./src/django-vite"

export default defineConfig({
    plugins: [
        djangoVitePlugin({
            server: {
                port: 5500
            }
        }),
    ],
})
