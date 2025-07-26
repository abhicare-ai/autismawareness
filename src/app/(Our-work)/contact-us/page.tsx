import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import clinic from "@/assets/clinic_img_1 (1).jpeg";
import Image from "next/image";
import ContactusForm from "./ContactusForm";

import { clinics } from "./list";

export const metadata: Metadata = {
  title: "Contact us",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>Contact us</Budge>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="md:w-1/2">
            <Image src={clinic} alt="clinic"   data-aos="fade-right"/>
          </div>
          <ContactusForm />
        </div>

        <div className="mx-auto max-w-7xl px-3">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 xl:grid-cols-3">
            {clinics.map((clinic, i) => (
              <div
                key={i}
                className={`relative rounded-md border-2 p-6 shadow-sm ${
                  clinic.highlight
                    ? "border-yellow-500 text-yellow-700"
                    : "border-teal-700 text-teal-700"
                }`}
                  data-aos="fade-left"
              >
                <h3 className="mb-2 text-xl font-bold text-black">
                  {clinic.city}
                </h3>
                <p className="mb-2 text-sm text-gray-600">{clinic.address}</p>
                {clinic.phones.map((phone, idx) => (
                  <p key={idx} className="text-md font-semibold">
                    {phone}
                  </p>
                ))}
                <p className="mt-1 text-sm">{clinic.email}</p>
              </div>
            ))}
          </div>
        </div>
      </AOSWrapper>
    </main>
  );
}
