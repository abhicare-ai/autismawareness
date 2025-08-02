"use client";

import Image from "next/image";
import Heading, { Paragraph } from "@/components/Heading";
import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductDialog from "./ProductDialog";

export default function Product() {
  const imgelist = ["/61GjxJvaOVL._SL1280_.jpg", "/book_intro.jpeg"];
  const [img, setImg] = useState(imgelist[0]);
  const [open, setOpen] = useState(false);

  return (
    <main className="space-y-5">
      <AOSWrapper>
        <Budge>Autism Book</Budge>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="top-3 h-fit space-y-3 md:sticky md:basis-1/2">
            <Image src={img} alt="s" width={500} height={500} />
            {/* ✅ Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2">
              {imgelist.map((v, i) => (
                <Image
                  src={v}
                  alt={`thumb-${i}`}
                  width={100}
                  height={100}
                  key={v}
                  onMouseEnter={() => setImg(v)}
                  className={`cursor-pointer rounded ${
                    img === v ? "ring-2 ring-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ✅ Book Details */}
          <div className={`space-y-3 md:basis-3/2`}>
            <Heading>Autism Care with Homeopathy</Heading>
            <p className="font-bold">By: Dr. Rajeev Kumar (B.H.M.S, M.D)</p>
            <Paragraph>
              Autism spectrum disorder (ASD) is a developmental disability
              caused by differences in the brain. Some people with ASD have a
              known difference, such as a genetic condition. Other causes are
              not yet known. Scientists believe there are multiple causes of ASD
              that act together to change the most common ways people develop.
              We still have much to learn about these causes and how they impact
              people with ASD.
            </Paragraph>
            <div className="flex items-center gap-2.5 text-xl font-bold">
              <span className="text-muted-foreground line-through">
                ₹650.00
              </span>
              <span>₹350.00</span>
            </div>
            <Button className="w-full" onClick={() => setOpen(true)}>
              Buy Now
            </Button>
          </div>
        </div>
        <ProductDialog onclose={() => setOpen(false)} open={open} />
      </AOSWrapper>
    </main>
  );
}
