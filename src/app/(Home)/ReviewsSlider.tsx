/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ReviewsSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative">
      <div
        ref={prevRef}
        className="absolute mt-[30px] top-[150px] right-[51%] z-10 hidden h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-blue-200 text-4xl text-gray-700 hover:text-black md:top-[110%] md:flex"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute mt-[30px] top-[150px] left-1/2 z-10 hidden h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-blue-200 text-4xl text-gray-700 hover:text-black md:top-[110%] md:flex"
      >
        ❯
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          200: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onInit={(swiper) => {
          if (
            typeof swiper.params.navigation === "object" &&
            swiper.params.navigation !== null &&
            prevRef.current &&
            nextRef.current
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const ReviewCard = ({ name, time, profilePic, stars, text,link }: any) => {
  const [showFullText, setShowFullText] = useState(false);
  return (
      <a href={link} target="_blank">
    <div className="bg-primary text-card w-full rounded-2xl border shadow-md">
      {/* Header Section */}
    
      <div className="flex items-center gap-3 p-3">
        <Image
          src={profilePic}
          alt={name}
          width={40}
          height={40}
          className="rounded-full border"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-card text-sm">{time}</p>
        </div>
      </div>

      {/* Star Ratings */}
      <div className="mt-2 flex gap-1 px-3">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} fill="#f4a462" color="#f4a462" size={20} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-card p-3 text-sm leading-relaxed">
        {showFullText ? text : `${text.slice(0, 120)}... `}
        <span
          className="cursor-pointer font-semibold text-black"
          // onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "See less" : "See more"}
        </span>
      </p>
       
    </div>
   </a>
  );
};

const reviews = [
  {
    name: "Rajni Minz",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Magical treatment given by Dr.Rajeev for my child who is Autistic.He suffer from Autism spectrum in which he do not speak a single word,no response,no eye contact n always bang his head on wall but thankfully I came to know about Dr.Rajeev n he is the person who give my child a new life now he talks,there is no head banging n start speak also.Thankyou so much sir I have full trust in him that he will give my child a successful life.",
    link: "https://g.co/kgs/a52jL3N",
  },
  {
    name: "LAVANYA KUMAR VISHAL",
    time: "4 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "It's a unspeechable experience having from Dr.Rajeev's abhi homeoclinic ,Ranchi for my niece Autism treatment.I don't have word to THANKS Dr.Rajeev as my child was not able to speak single sentence,unable to listen,can't concentrate but after having treatment for one year my child is normal now,he is able to go school,say everything. Thank you so much sir .My best wishes are always for him.May Dr.Rajeev cure each n every Autism child n give them a new life.",
    link: "https://g.co/kgs/J9JwRog",
  },
  {
    name: "Vandana Singh",
    time: "4 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 4,
    text: "A family completes when you have a child who is healthy in all aspects.we also have a child but he is suffering from Autism means he don't have a normal life.He is unable to speak not even a single word,we were very much worried about it had lots if treatment like Leelawati hospital,Mumbai n many more but there was no result. But after met with Dr.Rajeev and after having his treatment for my child my child now talks,he goes to school,he says poem now he is living a normal life only becoz of Dr.Rajeev.So many thanks to him.I advice each n every person to met him once for any kind problem especially Autism.well behaved staff with proper cooperation.only 1 year treatment 75% recovery and now we are again in his treatment only for his concentration in study other than that my child get100%cure",
    link: "https://g.co/kgs/E792U2c",
  },
  {
    name: "Alafia Zoya",
    time: "4 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "I m very much thankfull to Dr.Rajeev kumar a renowened homoeopathic physician who gives me a satisfactory result for my son who is suffering from autism,he is unable to speak,no eyecontact,unable to write,unable to give attention but after his treatment my son is 60%better,now he is writing from himself not only hindi,english but also chinease even speak also.His thinking power is also become better. Thankyou so much sir ,I recommend every patents who have autism child must visit abhi homoeoclinic once.Thankyou.",
    link: "https://g.co/kgs/kFxWxLJ",
  },
  {
    name: "Ayushma Prakash",
    time: "4 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Its a tremendous feeling when our autistic child become normal child.My child is suffering from Autism unable to speak,unable to learn,unable to concentrate he is almost zero in his activities but after treatment with Dr.Rajeev kumar my child start talking,now he is 90%better n I m very much happy n thankful to him that he give a new life to my child.I advice everyone to once meet Dr.Rajeev kumar,best doctor for autism treatment",
    link: "https://g.co/kgs/462NfoS",
  },
  {
    name: "Goutam Rawani",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 4,
    text: "Autism is treatable here...i am here under treatment for 6 months and I can see the changes in my son which is like a miracle..thank you Dr Rajeev for giving him a better life also I got the treatment of my piles cured here and my wife suffering of rheumatoid arthritis she is feeling so much relief now.great service for humankind",
    link: "https://g.co/kgs/SaqmsRk",
  },
  {
    name: "Deepankar Bhagat",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Well behaved team of Dr.Rajeev's Sir clinic team.if you have dusease of autism in your home kindly visit him if you wamt your child to live a better life.. Best service of tgid clinic in ranchi and best homeopathy doctors",
    link: "https://g.co/kgs/7MqSqrG",
  },
  {
    name: "Amit bose",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "My child is 6year old n he is suffering from Autism unable to talk unable to complete sentence .After knowing about Dr.Rajeev clinic my child start talking within 2month .THANKYOU SO MUCH SIR",
    link: "https://g.co/kgs/YGhR3LQ",
  },
  {
    name: "Sagar Shashank",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 4,
    text: "Best treatment for autism and piles...bleeding piles with fistula i was suffering of and i took treatment and now I'm all good and fine..thanx to dr rajeev and team",
    link: "https://g.co/kgs/oH4pK8W",
  },
  {
    name: "Arpan Lugun",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Best treatment for autism and arthritis...also you csn get rid of piles if you wre suffering from it..beet service",
    link: "https://g.co/kgs/12KzKuU",
  },
  {
    name: "Raaz Kumar",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Best treatment for autism thank you abhi homoeo hall and Dr Rajeev Sir....👍",
    link: "https://g.co/kgs/cXuohVh",
  },
  {
    name: "Krishna Sahu",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 4,
    text: "Best treatment for autism Dr Rajeev clinic",
    link: "https://g.co/kgs/jDirMJ2",
  },
  {
    name: "Shikha Kumari",
    time: "6 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 5,
    text: "Best Doctor for autism .. ..",
    link: "https://g.co/kgs/euA1aZR",
  },
  {
    name: "angad prajapati",
    time: "3 years ago",
    profilePic: "/avatar-placeholder.png",
    stars: 4,
    text: "best treatment for autism",
    link: "https://g.co/kgs/7UvAE4x",
  },
];
