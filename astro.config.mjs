// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: "server",
    experimental: {
        fonts: [
            {
                name: "FE 5 Cent",
                cssVariable: "--font-fe5cent",
                provider: "local",
                variants: [
                    {
                        weight: 400,
                        style: "normal",
                        src: ["src/fonts/FE5Cent-Regular.ttf"],
                    },
                ],
            },
            {
                provider: fontProviders.google(),
                name: "Poppins",
                cssVariable: "--font-roboto",
            },
        ],
    },

    vite: {
        plugins: [tailwindcss()],
    },
    adapter: cloudflare({
    }),
});