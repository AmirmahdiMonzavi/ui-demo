// import { Inter } from "next/font/google";
import localFont from "next/font/local";

// export const inter = Inter({
//   subsets: ["latin"],
//   style: ["normal"],
//   display: "block",
//   variable: "--font-inter",
//   weight: ["400", "700"],
// });

export const dana_font = localFont({
  variable: "--font-dana",
  display: "block",
  src: [
    {
      path: "./../../public/fonts/Dana-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Dana-Bold.woff",
      weight: "bold",
      style: "normal",
    },
  ],
});

export const inter_font = localFont({
  variable: "--font-inter",
  display: "block",
  src: [
    {
      path: "./../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Inter-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
});
