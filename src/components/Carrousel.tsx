"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { register } from "swiper/element/bundle";
register();

import Image from "next/image";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { images } from "@/lib/data";




export function Carrousel() {
  return (
    <Swiper
      loop={true}
      /*  autoplay={{ delay: 2000 }} */
      slidesPerView={1}
      className="mt-24  h-[350px] "
    >
      {images.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex  flex-col gap-6 justify-center items-center relative">
              <Image
                src={item.image}
                width={204}
                height={284}
                alt={item.image}
                className=" drop-shadow-2xl"
              />
              {item.discount.isDiscount && (
                <Badge
                  variant={"outline"}
                  className="absolute top-0 right-1/4 border-[#9C0746] text-[#9C0746]"
                >
                  {item.discount.value}% OFF
                </Badge>
              )}

              <Button
                variant={"outline"}
                className="border-[#9C0746] text-[#9C0746]"
              >
                {item.name}
              </Button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
