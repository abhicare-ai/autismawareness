import AOSWrapper from "@/components/AOSWrapper";
import Budge from "@/components/Budge";
import { Metadata } from "next";
import React from "react";
import doctorImg from "@/assets/doctor_home_banner (1).jpg";
import Image from "next/image";
import clinicImg from "@/assets/clinic_img_1 (1).jpeg";
export const metadata: Metadata = {
  title: "About us",
};
export default function Page() {
  return (
    <main className="space-y-5 overflow-hidden">
      <AOSWrapper>
        <Budge>About us</Budge>
        <div className="mx-auto max-w-7xl space-y-6 px-3">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Left Content */}
            <div className="space-y-3 md:w-1/2">
              {/* Screening Questionnaire Section */}
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
              About ABHI HOMEO HALL
              </p>
              <p data-aos="fade-right">
                ABHI HOMEO HALL is a one and half decade old renowned clinic
                that offers the best quality, non-toxic and highly effective
                treatment in Ranchi and Delhi. Our treatment is based on the
                rich and traditional classical homeopathic knowledge and usage
                of advanced technology. We have a team of dedicated homeopaths
                who work to provide efficient service that brings healing power
                to the patients.
              </p>
              <p data-aos="fade-right">
                Our aim is to spread the homoeopathic treatment to numerous
                patients suffering from broad range of diseases and to achieve
                success in patient care by using classical homeopathy under the
                brand ABHI HOMEO HALL.
              </p>
              <p data-aos="fade-right">
                We offer excellent patient care, best service and strive to
                improve every patient’s health vigorously. We also provide the
                best medical treatment by our experienced doctors which are
                based on the modern scientific research.
              </p>
            </div>

            {/* Right Image */}

            <div data-aos="fade-left" className="h-auto max-w-full md:w-1/2">
              <Image src={clinicImg} alt="clinicImg" />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div data-aos="fade-left" className="h-auto max-w-full md:w-1/2">
              <Image src={doctorImg} alt="clinicImg" />
            </div>
            {/* Left Content */}
            <div className="space-y-3 md:w-1/2">
              {/* Screening Questionnaire Section */}
              <p
                className="text-muted-foreground text-3xl font-bold"
                data-aos="fade-right"
              >
                About Dr. Rajeev Kumar
              </p>
              <p data-aos="fade-right">
                He is not the one who belives in building castles in the air.
                His dreams were restricted but with his tremendous courage of
                conviction coupled with an innovative streak, he has translated
                those restricted dreams into reality. Meet Dr. Rajeev Kumar, the
                reputed Homoeopath of Ranchi, who needs no introduction for the
                city dwellers.
              </p>
              <p data-aos="fade-right">
                Born in a middle class family in Gopalganj, Bihar, to a social
                worker father, Dr. Rajeev Kumar is one such persona who has
                scripted success story that is worthy emulating.
              </p>
              <p data-aos="fade-right">
                &ldquo;My father, Late Kamleshwar Prasad was a social worker and
                a village mukhiya. Our values were our assets. There was little
                in the name of sacings. I came to Ranchi with just Rs.5000. Rest
                is history,&ldquo; says the homoeopath, who is a standalone in
                the crowd of businessmen who turned into doctor by his sheer
                dint of arduous labour.
              </p>
              <p data-aos="fade-right">
                In pursue of success, Dr. Kumar, started off with Abhi Homoeo
                Hall in 2003 as a homoeopathy medicines distributor. However,
                the yearning to become a doctor and serve patients kept bugging
                him. Soon he left the medicine business to his uncle and went to
                Bhagalpur to study homoeopathic medicine.
              </p>
              <p data-aos="fade-right">
                Dr. Kumar’s and Abhi Homoeo Hall’s journey started in a one room
                rented house in 2003. From a tiny spec in the vast medicine
                market, Kumar in 12 years has become one of the biggest
                distributor in the region, a renowned homoeopath and envisages
                the dream of opening Eastern Zone’s first private homoeopathy
                hospital of 30 beds by August.
              </p>
              <p data-aos="fade-right">
                But behind the story of this homoeopathic doctor’s mini-empire
                is a sea of challenges and struggles. Initially, destiny was
                unfavourable to this ypung man when he ventured into the
                business after procuring Bachelor in Homoeopathy Medicine and
                Sciences (BHMS) degree from KNH College, Bhagalpur in 2004.
              </p>
          
            </div>

            {/* Right Image */}
          </div>
              <p data-aos="fade-right">
                “Banks were apprehensive about my venture and application for
                loans was falling into deaf ears. There was none to help except
                my uncle, Dr. Amreshwar Prasad, also a homoeopath. And when the
                business was somehow set up, the challenge haunted me. Some I
                complete the setup in a year,” said Dr. Kumar.
              </p>
        </div>
      </AOSWrapper>
    </main>
  );
}
