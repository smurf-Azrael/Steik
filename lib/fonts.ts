import {
  Bebas_Neue as FontBebas,
  JetBrains_Mono as FontMono,
  DM_Sans as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontBebas = FontBebas({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
})
