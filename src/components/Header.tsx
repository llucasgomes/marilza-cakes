import { ShoppingBag } from "lucide-react";
import MenuMobile from "./MenuMobile";
import { sail } from "@/app/ui/fonts";

export default function Header() {
  return (
    <header className="w-full p-5 flex items-center justify-around h-8">
      <MenuMobile />
      <h2
        className={`${sail.className} text-xl text-[#9C0746] w-full text-center`}
      >
        Marilza Cakes
      </h2>
    </header>
  );
}
