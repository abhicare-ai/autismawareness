import { exploreType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardItemPorps {
  cardDeta: exploreType;
}
export default function CardItem({ cardDeta }: CardItemPorps) {
  return (
    <div className="overflow-hidden rounded border bg-white shadow-md transition hover:shadow-lg" data-aos="fade-up-right">
      <Link href={`${cardDeta.link}/${cardDeta.id}`}>
        <Image
          src={cardDeta.img}
          alt={cardDeta.title}
          width={400}
          height={300}
          className="h-[250px] w-full object-cover duration-300 hover:scale-105"
        />
      </Link>
      <div className="space-y-3 p-5 text-center">
        <Link
          href={`${cardDeta.link}/${cardDeta.id}`}
          className="text-xl font-semibold text-blue-600 hover:underline"
        >
          {cardDeta.title}
        </Link>
        <div className="flex justify-center">
          <span className="h-1 w-10 rounded bg-gray-300" />
        </div>
        <p>{cardDeta.desc}</p>
      </div>
    </div>
  );
}
