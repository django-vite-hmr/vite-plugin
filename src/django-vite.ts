import { sync } from "glob"
import { resolve } from "path"
import { PluginOption, UserConfig } from "vite"

function getFiles(pattern: string) {
    return sync(pattern).map((file) => resolve(file))
}

export function djangoVitePlugin(config: UserConfig = {}): PluginOption {
    return {
        name: "django-vite-plugin",
        config: () => ({
            base: "/",
            server: {
                host: "localhost",
                port: 5173,
                strictPort: true,
            },
            build: {
                manifest: true,
                outDir: "./static/dist",
                rollupOptions: {
                    input: [
                        ...getFiles("./static/**/*.css"),
                        ...getFiles("./static/**/*.js"),
                        ...getFiles("./**/static/**/*.css"),
                        ...getFiles("./**/static/**/*.js"),
                    ],
                },
            },
            ...config,
        }),
    }
}
