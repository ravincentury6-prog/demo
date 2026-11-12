import localFont from "next/font/local";

// Moulin Font Family
export const moulin = localFont({
  src: [
    {
      path: "../../public/fonts/Moulin-Thin-Trial.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Black-Trial.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Moulin-Super-Trial.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-moulin",
  display: "swap",
});

// Neptune Font Family
export const neptune = localFont({
  src: [
    {
      path: "../../public/fonts/Neptune-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neptune-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neptune-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neptune-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neptune-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neptune-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neptune",
  display: "swap",
});