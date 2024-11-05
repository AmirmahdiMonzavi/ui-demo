# Project Setup

1. **Add the UI Submodule**
   Add the UI repository as a submodule to your root project. This will include the UI’s Tailwind configuration, making it accessible in your root Tailwind config.

2. **Configure Tailwind in the Root Project**
   Import the UI submodule’s Tailwind config and extend the theme with primary and secondary color palettes in the root Tailwind configuration.

3. **Tailwind Config Example**

   ```typescript
   import type { Config } from "tailwindcss";
   import uiConfig from "./ui/tailwind.config";

   const config: Config = {
     ...uiConfig, // Spreading default config from UI submodule
     content: [
       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./components/**/*.{js,ts,jsx,tsx,mdx}",
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "./ui/app/_components/**/*.{js,ts,jsx,tsx,mdx}", // This part for the UI submodule
     ],
     theme: {
       extend: {
         ...uiConfig.theme?.extend,
         colors: {
           ...uiConfig.theme?.extend?.colors,
           primary: {
             "01": "#f9fefd",
             "02": "#f2fcfc",
             "03": "#d4f7f4",
             "04": "#aaeee9",
             "05": "#72e3da",
             "06": "#2ad5c6",
             "07": "#23afa3",
             "08": "#1b887f",
             "09": "#13625c",
             10: "#0c3c37",
             11: "#041413",
             alnf: "#f2fcfb",
             alf: "#21a79c",
           },
           secondary: {
             "01": "#FCFDFD",
             "02": "#F6F8F9",
             "03": "#E0E7EB",
             "04": "#C2CFD6",
             "05": "#9AB0BC",
             "06": "#668899",
             "07": "#54707D",
             "08": "#415762",
             "09": "#2F3F46",
             10: "#1D262B",
             11: "#0A0E0F",
           },
         },
       },
     },
   };

   export default config;

Also you can import globals.css and fonts.ts files from submodule for static styles and fonts.