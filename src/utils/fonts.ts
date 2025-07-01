import { Bricolage_Grotesque, Inter, Montserrat } from "next/font/google";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

const inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
});

const montserrat_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const bricolage_grotesque = bricolage_grotesque_init.className;
export const inter = inter_init.className;
export const montserrat = montserrat_init.className;
