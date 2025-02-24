import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // ✅ إضافة Flowbite هنا
  ],
  theme: {
    extend: {
      keyframes: {
        swipper: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // ✅ تم تصحيح القوس هنا
        },

        swipperr: {
          '0%': { transform: 'translateX(1)' },
          '100%': { transform: 'translateX(100%)' }, // ✅ تم تصحيح القوس هنا
        },
      },
      animation: {
        swipe: 'swipper 30s linear infinite',
        swip: 'swipperr 40s linear infinite',
      },
      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
