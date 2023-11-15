import { Inter, Sail, Montserrat, Open_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const sail = Sail({ subsets: ["latin"], weight: "400" });

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "900"],
});

export const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });
