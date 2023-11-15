import Image from "next/image";
import { montserrat, openSans, sail } from "./ui/fonts";
import { Button } from "@/components/ui/button";
import { Carrousel } from "@/components/Carrousel";
import {
  BadgePercent,
  ChefHat,
  CircleDollarSign,
  Microwave,
  Milk,
} from "lucide-react";

export default function Home() {
  const carouselItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <main className=" px-6 grid-cols-1 items-center justify-center">
      <section className="w-full flex items-center flex-col mt-24">
        <h1 className={`${sail.className} text-3xl text-[#9C0746] text-center`}>
          Marilza Cakes
        </h1>
        <h2
          className={`${montserrat.className} font-black text-xl text-[#444251] text-center mt-4`}
        >
          Eu vou te deixar feliz!
        </h2>

        <div className="w-full max-w-[250px] flex justify-around gap-4 items-center mt-8">
          <Button color="#9C0746">Escolha o Bolo</Button>
          <Button variant="outline">Crie seu próprio</Button>
        </div>
      </section>
      <section className="md:hidden flex justify-center items-center">
        <Carrousel />
      </section>

      <section className="mt-8 w-full h-auto  flex justify-center items-center">
        <video
          /* autoPlay={true} */
          muted={true}
          controls={true}
          loop={true}
          className="rounded-lg max-w-md w-full"
        >
          <source src={"/video.mp4"} type="video/mp4" />
        </video>
      </section>

      <section className="mt-10 flex flex-col justify-center items-center gap-11">
        <h2
          className={`${montserrat.className}  font-black text-xl text-[#444251] text-center `}
        >
          Por que é delicioso aqui?
        </h2>

        <div className="w-[113px] h-[135px]  flex flex-col justify-center items-center gap-5 mb-7">
          <div className="   p-5 border-[#FFD4DD] bg-[#fde5ea] rounded-full border-solid border-2">
            <Milk size={80} strokeWidth={0.75} color="#9c0746" />
          </div>
          <p
            className={`${openSans.className} w-48 text-center text-[#444251]`}
          >
            Produtos de qualidade
          </p>
        </div>

        <div className="w-[113px] h-[135px]  flex flex-col justify-center items-center gap-5 mb-7">
          <div className="   p-5 border-[#FFD4DD] bg-[#fde5ea] rounded-full border-solid border-2">
            <Microwave size={80} strokeWidth={0.75} color="#9c0746" />
          </div>
          <p
            className={`${openSans.className} w-48 text-center text-[#444251]`}
          >
            Equipamentos Caros
          </p>
        </div>

        <div className="w-[113px] h-[135px]  flex flex-col justify-center items-center gap-5 mb-7">
          <div className="   p-5 border-[#FFD4DD] bg-[#fde5ea] rounded-full border-solid border-2">
            <ChefHat size={80} strokeWidth={0.75} color="#9c0746" />
          </div>
          <p
            className={`${openSans.className} w-48 text-center text-[#444251]`}
          >
            Os melhores confeiteiros
          </p>
        </div>
        <div className="w-[113px] h-[135px]  flex flex-col justify-center items-center gap-5 mb-7">
          <div className="   p-5 border-[#FFD4DD] bg-[#fde5ea] rounded-full border-solid border-2">
            <CircleDollarSign size={80} strokeWidth={0.75} color="#9c0746" />
          </div>
          <p
            className={`${openSans.className} w-48 text-center text-[#444251]`}
          >
            Preços acessíveis
          </p>
        </div>
        <div className="w-[113px] h-[135px]  flex flex-col justify-center items-center gap-5 mb-7">
          <div className="   p-5 border-[#FFD4DD] bg-[#fde5ea] rounded-full border-solid border-2">
            <BadgePercent size={80} strokeWidth={0.75} color="#9c0746" />
          </div>
          <p
            className={`${openSans.className} w-48 text-center text-[#444251]`}
          >
            Programa de lealdade
          </p>
        </div>

        <div className="w-[300px] max-w-[300px] h-[300px]  flex flex-col justify-center items-center gap-5 mb-10 ">
          <div className="w-full h-full flex justify-center items-center rounded-full border-solide border-4 bg-white border-[#fae2e7] relative">
            <div className="w-4 h-4  rounded-full bg-[#9c0746] absolute top-10 left-6"></div>
            <div className="w-4 h-4  rounded-full bg-[#9c0746] absolute top-10 right-6"></div>
            <div className="w-4 h-4  rounded-full bg-[#9c0746] absolute bottom-10 right-6"></div>
            <div className="w-4 h-4  rounded-full bg-[#9c0746] absolute bottom-10 left-6"></div>
            <Image
              src={"/chefhat.png"}
              width={500}
              height={500}
              alt="mestre cuca"
              className="w-[100%] h-[90%]"
            />
          </div>
        </div>
      </section>

      {/* Experimente nossos novos produtos */}
      <section className="mt-10 flex flex-col justify-center items-center gap-11">
        <h2
          className={`${montserrat.className}  font-black text-xl text-[#444251] text-center `}
        >
          Experimente nossos novos produtos
        </h2>
      </section>
    </main>
  );
}
