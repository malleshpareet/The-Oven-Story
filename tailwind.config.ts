import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: { sans: ['var(--font-outfit)'] },
            colors: { pizza: { gold: '#FFC107', red: '#D32F2F', dark: '#0A0A0A' } }
        },
    },
    plugins: [],
};
export default config;
