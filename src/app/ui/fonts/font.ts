import { Montserrat_Alternates } from "next/font/google";
import { Glass_Antiqua } from "next/font/google";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--default-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const glassAntiqua = Glass_Antiqua({
  subsets: ["latin"],
  variable: "--font-title",
  weight: "400",
});
