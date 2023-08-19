import { Nova_Slim, Noto_Sans_Thai_Looped } from "next/font/google";

export const nova = Nova_Slim({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});
export const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});
export const nova_thai_semi_bold = Noto_Sans_Thai_Looped({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-inter",
});
export const nova_thai_bold = Noto_Sans_Thai_Looped({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

