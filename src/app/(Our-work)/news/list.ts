import { exploreType, stateNameType } from "@/lib/types";

export const newsList: stateNameType[] = [
  { id: 1, stateName: "Jharkhand" },
  { id: 2, stateName: "Delhi" },
  { id: 3, stateName: "Bihar" },
  { id: 4, stateName: "West Bengal" }, // Not a state but kept as per your requirement
  { id: 5, stateName: "Andhra Pradesh" },
  { id: 6, stateName: "Arunachal Pradesh" },
  { id: 7, stateName: "Assam" },
  { id: 8, stateName: "Chhattisgarh" },
  { id: 9, stateName: "Goa" },
  { id: 10, stateName: "Gujarat" },
  { id: 11, stateName: "Haryana" },
  { id: 12, stateName: "Himachal Pradesh" },
  { id: 13, stateName: "Karnataka" },
  { id: 14, stateName: "Kerala" },
  { id: 15, stateName: "Madhya Pradesh" },
  { id: 16, stateName: "Maharashtra" },
  { id: 17, stateName: "Manipur" },
  { id: 18, stateName: "Meghalaya" },
  { id: 19, stateName: "Mizoram" },
  { id: 20, stateName: "Nagaland" },
  { id: 21, stateName: "Odisha" },
  { id: 22, stateName: "Punjab" },
  { id: 23, stateName: "Rajasthan" },
  { id: 24, stateName: "Sikkim" },
  { id: 25, stateName: "Tamil Nadu" },
  { id: 26, stateName: "Telangana" },
  { id: 27, stateName: "Tripura" },
  { id: 28, stateName: "Uttar Pradesh" },
  { id: 29, stateName: "Uttarakhand" },
];

export const newsData: exploreType[] = [
  // Jharkhand Entries

  {
    id: 1,
    img: "/IMG-20250727-WA0001.jpg",
    title: "Jharkhand",
    link: "/news",
    desc: "A heartfelt look into the lives of special children in Jharkhand and the support they receive.",
    subtab: {
      id: 2,
      heading: "",
      paragraph: `
        <p>
          In a serene village of Jharkhand, this cheerful young boy is now living in a safe and nurturing environment. With a structured routine and a compassionate support team, he enjoys his days playing with peers and attending a local therapy center.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              What does a day in his life look like?
            </p>
            <p>
              He wakes up with a smile, ready for morning activities that include painting, music, and outdoor games. His favorite part of the day is the community walk with his caregivers, where he often waves at neighbors with delight.
            </p>
            <p>
              Afternoon sessions involve special education tailored for his unique learning style, helping him improve communication and social interaction skills. After that, he enjoys playing with building blocks and listening to folk songs.
            </p>
            <p>
              His caregivers say he loves hugs and expresses emotions openly. With routine therapy and a lot of love, he’s making progress every day.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0001.jpg" alt="Child in Jharkhand" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          His story is one of resilience and hope. Thanks to dedicated efforts and community involvement, this young boy has found joy, connection, and a path toward a brighter future.
        </p>
      `,
    },
  },

  {
    id: 3,
    img: "/IMG-20250727-WA0002.jpg",
    title: "Jharkhand",
    link: "/news",
    desc: "A devoted mother in rural India advocates for her son's right to learn and grow.",
    subtab: {
      id: 4,
      heading: "",
      paragraph: `
        <p>
          Seen here smiling proudly, this mother has fought tirelessly to ensure her son with developmental challenges receives the care he deserves. Living in a modest home, she manages both household work and caregiving with grace and strength.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              What inspired her advocacy?
            </p>
            <p>
              After struggling to find nearby resources, she connected with a nonprofit that introduced her to educational and behavioral therapies. Since then, she has become a local voice for disability inclusion.
            </p>
            <p>
              Her son, now 9, is enrolled in a community-based program where he learns at his own pace. With consistent therapy and his mother’s involvement, he has learned to write his name and make eye contact.
            </p>
            <p>
              Her biggest hope is that her child will someday go to a mainstream school and be treated like everyone else.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0002.jpg" alt="Mother with child" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          Her courage reminds us that change starts at home — and that every child, no matter their challenges, deserves love, learning, and dignity.
        </p>
      `,
    },
  },

  {
    id: 5,
    img: "/IMG-20250727-WA0003.jpg",
    title: "Jharkhand",
    link: "/news",
    desc: "A group photo showing unity, diversity, and happiness in a remote village.",
    subtab: {
      id: 6,
      heading: "",
      paragraph: `
        <p>
          This vibrant group photo was taken during a local awareness camp on autism. The community came together in support of children with disabilities, promoting inclusion and love.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              Why are gatherings like this important?
            </p>
            <p>
              Events like these not only raise awareness but also reduce stigma. Parents get to meet professionals, volunteers offer support, and children have a day filled with joy.
            </p>
            <p>
              In this village, such camps are becoming regular — offering diagnosis, counseling, and follow-up services for special needs families.
            </p>
            <p>
              The warmth in this photo speaks for itself: everyone deserves to belong.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0003.jpg" alt="Group gathering" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          With unity, even remote areas can build inclusive futures. This gathering is proof of the power of community.
        </p>
      `,
    },
  },

  {
    id: 7,
    img: "/IMG-20250727-WA0004.jpg",
    title: "Jharkhand",
    link: "/news",
    desc: "A young boy and his caretaker explore the outdoors as part of sensory therapy.",
    subtab: {
      id: 8,
      heading: "",
      paragraph: `
        <p>
          On a sunny afternoon, this boy enjoys his daily outdoor therapy — a walk that engages his senses and builds his motor skills. Every step is guided with patience and care by his caretaker.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              How does nature-based therapy help?
            </p>
            <p>
              Therapists often recommend nature walks for children with sensory processing issues. The natural textures, sounds, and sights help them regulate better than indoor settings.
            </p>
            <p>
              His caretaker ensures he feels safe, encouraged, and never rushed. This routine has helped him become more focused and calm.
            </p>
            <p>
              These daily walks are not just therapeutic — they’re joyful.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0004.jpg" alt="Boy walking outdoors" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          Progress may be slow, but every step is worth celebrating — especially when walked with compassion.
        </p>
      `,
    },
  },

  {
    id: 9,
    img: "/IMG-20250727-WA0005.jpg",
    title: "Jharkhand",
    link: "/news",
    desc: "Moments of shared laughter and love at a local disability inclusion event.",
    subtab: {
      id: 10,
      heading: "",
      paragraph: `
        <p>
          Laughter echoes through the open hall where families and children with special needs come together for storytelling, games, and dance. The joy on every face is undeniable.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              What makes these events special?
            </p>
            <p>
              Inclusion events break down walls. Parents no longer feel alone, children find new friends, and volunteers gain a deeper understanding of empathy.
            </p>
            <p>
              This photo captures a moment of shared happiness. A mother watches her child smile in a group setting for the first time — and that makes all the difference.
            </p>
            <p>
              Everyone is welcome here, regardless of ability.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0005.jpg" alt="Children at event" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          Community, care, and connection — these are the foundations of a truly inclusive world. And it starts with days like this.
        </p>
      `,
    },
  },

  // Bihar Entries

  {
    id: 11,
    img: "/IMG-20250727-WA0006.jpg",
    title: "Bihar",
    link: "/news",
    desc: "A caring father brings his son to a local homeopathy center for regular checkups.",
    subtab: {
      id: 12,
      heading: "",
      paragraph: `
        <p>
          In the heart of rural Bihar, this father is dedicated to improving his son's well-being. Every month, he travels miles to bring his child for follow-up appointments, seeking a better life through consistent care.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              Why is this journey important?
            </p>
            <p>
              With limited access to healthcare in his village, this father’s commitment is vital. He believes in holistic healing and has found hope through homeopathy support.
            </p>
            <p>
              The child, diagnosed with developmental delays, receives regular speech therapy, natural supplements, and emotional care.
            </p>
            <p>
              Progress is slow but steady, and the clinic staff often praise the father's consistency.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0006.jpg" alt="Father with child in clinic" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          This bond of trust between parent and doctor is a foundation of rural healthcare in India — simple, strong, and full of heart.
        </p>
      `,
    },
  },

  {
    id: 12,
    img: "/IMG-20250727-WA0007.jpg",
    title: "Bihar",
    link: "/news",
    desc: "A young girl overcomes severe allergies with dedicated homeopathy care in Bihar.",
    subtab: {
      id: 14,
      heading: "",
      paragraph: `
        <p>
          This bright young girl used to suffer from frequent skin allergies and rashes. Her family sought natural and side-effect-free treatment — and found relief at a homeopathy center in Bihar.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              What changed for her?
            </p>
            <p>
              After months of personalized care, her symptoms drastically reduced. Her treatment included customized medicine, dietary advice, and parental education on skin hygiene.
            </p>
            <p>
              She now plays freely without fear of reactions and attends school with confidence.
            </p>
            <p>
              Her smile is proof that the right care can bring big change, even in small towns.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0007.jpg" alt="Girl smiling after recovery" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          This story reflects the growing trust in homeopathy as an effective healing system, especially among children.
        </p>
      `,
    },
  },

  {
    id: 15,
    img: "/IMG-20250727-WA0008.jpg",
    title: "Bihar",
    link: "/news",
    desc: "A therapist in Bihar helps children with speech and sensory issues improve communication.",
    subtab: {
      id: 16,
      heading: "",
      paragraph: `
        <p>
          In a modest but vibrant therapy room, this speech therapist works wonders with children who face communication challenges. She combines homeopathic principles with interactive sessions to build language and connection.
        </p>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class=" md:w-1/2">
            <p class="text-muted-foreground text-3xl font-bold">
              How are the sessions designed?
            </p>
            <p>
              Using play-based therapy, picture cards, and storytelling, the therapist makes learning fun. Her calm demeanor reassures both children and their parents.
            </p>
            <p>
              Several children have begun speaking full sentences after just a few months of regular sessions.
            </p>
            <p>
              The clinic is now seeing an increase in parents seeking non-invasive therapies like this.
            </p>
          </div>
          <div class="md:w-1/2">
            <img src="/IMG-20250727-WA0008.jpg" alt="Therapist working with child" class="w-full h-96 overflow-auto object-cover"/>
          </div>
        </div>

        <p>
          A small room with big impact — therapy, patience, and the right support can transform lives.
        </p>
      `,
    },
  },

  {
    id: 17,
    img: "/IMG-20250727-WA0009.jpg",
    title: "Bihar",
    link: "/news",
    desc: "Innovative visual tools introduced in Bihar's special education centers to aid non-verbal children.",
    subtab: {
      id: 18,
      heading: "",
      paragraph: `
      <p>
        In a quiet town in Bihar, special educators are using picture cards and symbol boards to help children who struggle with speech. These tools empower kids to express basic needs and emotions.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            Why do visual aids matter?
          </p>
          <p>
            For many children with speech delays or autism, visuals create a bridge to communication. One teacher shared, “A boy who never spoke now taps on a picture of food when he’s hungry.”
          </p>
          <p>
            Parents are also trained to use the same system at home, building consistency and confidence in the child.
          </p>
          <p>
            This cost-effective approach is gaining attention from neighboring districts too.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0009.jpg" alt="Visual aid session in Bihar" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        Through creative methods and compassionate guidance, Bihar is proving that communication doesn't always need words.
      </p>
    `,
    },
  },
  {
    id: 19,
    img: "/IMG-20250727-WA0010.jpg",
    title: "Bihar",
    link: "/news",
    desc: "A weekend art therapy camp in Bihar gives children space to express and explore their emotions.",
    subtab: {
      id: 20,
      heading: "",
      paragraph: `
      <p>
        In Patna, a colorful weekend camp brought together children with special needs for art and music therapy. Paints, drums, and laughter filled the hall as kids explored creative self-expression.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What does art unlock?
          </p>
          <p>
            Therapists say that many children who don’t speak much often express themselves freely through color and movement. “Art lets their inner world shine,” said one facilitator.
          </p>
          <p>
            Parents also joined in, painting beside their kids and sharing emotional moments.
          </p>
          <p>
            The camp plans to run monthly sessions with a focus on inclusion and joy.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0010.jpg" alt="Art therapy session in Bihar" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        These joyful events show how creative therapy is quietly revolutionizing child care across Bihar.
      </p>
    `,
    },
  },

  // Delhi Entries
  {
    id: 21,
    img: "/IMG-20250727-WA0011.jpg",
    title: "Delhi",
    link: "/news",
    desc: "In the heart of Delhi, a girl finds hope and healing through holistic homeopathy care.",
    subtab: {
      id: 22,
      heading: "",
      paragraph: `
      <p>
        This young girl, seen holding her mother’s hand, is a regular visitor at a Delhi homeopathy clinic. She was once withdrawn and anxious, struggling with frequent fevers and fatigue.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What changed her life?
          </p>
          <p>
            Her mother opted for natural remedies over antibiotics, and within months, her daughter's energy returned. The clinic provided personalized care, herbal support, and plenty of reassurance.
          </p>
          <p>
            The mother says, “I see her smile again. That means everything.”
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0011.jpg" alt="Mother and daughter in Delhi" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        This is one of many success stories coming from Delhi’s growing homeopathy community — proof that gentle care can make a powerful difference.
      </p>
    `,
    },
  },
  {
    id: 23,
    img: "/IMG-20250727-WA0012.jpg",
    title: "Delhi",
    link: "/news",
    desc: "A father-daughter duo embraces healing at a community wellness center in Delhi.",
    subtab: {
      id: 24,
      heading: "",
      paragraph: `
      <p>
        At a local wellness camp in Delhi, this father brought his daughter for a check-up. Diagnosed with chronic joint pain, she now follows a regimen of homeopathy and physiotherapy.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            Why this approach?
          </p>
          <p>
            Conventional painkillers were giving only temporary relief. Homeopathic consultation helped uncover underlying nutritional and postural issues.
          </p>
          <p>
            Today, the girl moves freely and attends school again, while her father encourages other parents to explore safe alternatives.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0012.jpg" alt="Father and daughter at clinic" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        Community-driven healing in Delhi is gaining ground, thanks to trust and compassion.
      </p>
    `,
    },
  },
  {
    id: 25,
    img: "/IMG-20250727-WA0013.jpg",
    title: "Delhi",
    link: "/news",
    desc: "Children explore sensory play at a Delhi-based therapy workshop for developmental delays.",
    subtab: {
      id: 26,
      heading: "",
      paragraph: `
      <p>
        This colorful therapy session in Delhi gives children with autism and speech delays a chance to explore, feel, and learn through tactile play.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What makes this method special?
          </p>
          <p>
            Sensory integration therapy is known to calm children and enhance their communication. In this center, children play with sand, water, and textured objects under expert guidance.
          </p>
          <p>
            Parents often join in to support and bond, making therapy a shared journey.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0013.jpg" alt="Child in sensory therapy session" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        Through playful learning and warm support, Delhi's therapy centers are helping kids thrive.
      </p>
    `,
    },
  },
  {
    id: 27,
    img: "/IMG-20250727-WA0014.jpg",
    title: "Delhi",
    link: "/news",
    desc: "A young boy attends a homeopathy camp for respiratory issues in Delhi's urban outskirts.",
    subtab: {
      id: 28,
      heading: "",
      paragraph: `
      <p>
        Frequent coughing and asthma-like symptoms brought this child to a free health camp. His parents had tried several treatments before turning to this mobile clinic.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What did they discover?
          </p>
          <p>
            The doctor identified environmental triggers and recommended a gentle detox course with natural remedies. Breathing exercises were also taught.
          </p>
          <p>
            Within weeks, his symptoms reduced. The family now advocates clean air and awareness.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0014.jpg" alt="Boy at health camp in Delhi" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        From crisis to calm — homeopathy in Delhi offers new hope to families navigating chronic health challenges.
      </p>
    `,
    },
  },
  {
    id: 29,
    img: "/IMG-20250727-WA0015.jpg",
    title: "Delhi",
    link: "/news",
    desc: "A group celebration in Delhi highlights inclusion and wellness for children with special needs.",
    subtab: {
      id: 30,
      heading: "",
      paragraph: `
      <p>
        This joyful group photo was captured during an inclusive event hosted by a Delhi NGO. Children with varying abilities joined hands in song, games, and shared meals.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What does it represent?
          </p>
          <p>
            It’s more than just a party — it’s a promise. A promise that every child deserves celebration, no matter their limitations. The event also included free check-ups and parent workshops.
          </p>
          <p>
            “When our children are seen and heard,” said one mother, “they shine.”
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0015.jpg" alt="Inclusive event in Delhi" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        This celebration in Delhi proves that healing includes joy, recognition, and community spirit.
      </p>
    `,
    },
  },

  // West bengal Entries from heer

  {
    id: 31,
    img: "/IMG-20250727-WA0016.jpg",
    title: "West Bengal",
    link: "/news",
    desc: "A dedicated mother brings her child to a Kolkata center for regular developmental therapy.",
    subtab: {
      id: 32,
      heading: "",
      paragraph: `
      <p>
        In bustling Kolkata, this mother’s quiet determination is changing her child’s life. Facing early developmental delays, her son now receives weekly therapy guided by homeopathic and sensory care.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What keeps her going?
          </p>
          <p>
            Despite financial constraints, she prioritizes therapy sessions and closely follows every instruction given. Her child has started responding to his name and using gestures for communication.
          </p>
          <p>
            The clinic calls her “a parent warrior” — someone who leads with patience, not panic.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0016.jpg" alt="Mother and child in Kolkata clinic" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        Her story reflects thousands across Bengal — parents rising with resolve and hope.
      </p>
    `,
    },
  },
  {
    id: 33,
    img: "/IMG-20250727-WA0017.jpg",
    title: "West Bengal",
    link: "/news",
    desc: "Music therapy sessions in West Bengal bring joy to neurodivergent children.",
    subtab: {
      id: 34,
      heading: "",
      paragraph: `
      <p>
        A therapy center in West Bengal echoes with beats and melodies as children take part in rhythm-based healing. For many, music is a language they understand best.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            Why music?
          </p>
          <p>
            Therapists say that music activates parts of the brain that words cannot reach. “Children who don’t speak often hum along,” says a facilitator.
          </p>
          <p>
            These sessions reduce anxiety, improve focus, and create bonds through shared sound.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0017.jpg" alt="Children participating in music therapy" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        In Bengal’s therapy movement, joy is medicine — and rhythm is revolution.
      </p>
    `,
    },
  },
  {
    id: 35,
    img: "/IMG-20250727-WA0018.jpg",
    title: "West Bengal",
    link: "/news",
    desc: "Rural Bengal embraces speech therapy with heartwarming results in small villages.",
    subtab: {
      id: 36,
      heading: "",
      paragraph: `
      <p>
        In a remote village in West Bengal, a humble center teaches speech skills through play, storytelling, and home-based strategies. Children who were once silent are now speaking in phrases.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What makes it special?
          </p>
          <p>
            The program uses local language stories, family involvement, and visual aids made from household items. Parents are trained as co-therapists.
          </p>
          <p>
            It’s low-cost, high-love — and full of breakthrough moments.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0018.jpg" alt="Village speech therapy session" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        West Bengal’s grassroots health work proves that simplicity and sincerity go a long way.
      </p>
    `,
    },
  },
  {
    id: 37,
    img: "/IMG-20250727-WA0019.jpg",
    title: "West Bengal",
    link: "/news",
    desc: "A young boy finds calm through visual therapy techniques in a Kolkata wellness hub.",
    subtab: {
      id: 38,
      heading: "",
      paragraph: `
      <p>
        Diagnosed with hyperactivity and sensory overload, this boy used to struggle in noisy settings. Today, using visual schedules and structured time, he smiles more and panics less.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What helped him improve?
          </p>
          <p>
            Visual timetables, calming corner charts, and homeopathy helped reduce his anxiety. His mother says he now transitions between activities with fewer meltdowns.
          </p>
          <p>
            The center’s “calm tools” are being shared with local schools as well.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0019.jpg" alt="Child using visual tools" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        His calm is a quiet victory — showing how clarity and compassion change lives.
      </p>
    `,
    },
  },
  {
    id: 39,
    img: "/IMG-20250727-WA0020.jpg",
    title: "West Bengal",
    link: "/news",
    desc: "A community gathering in Bengal celebrates neurodiversity with art, song, and shared stories.",
    subtab: {
      id: 40,
      heading: "",
      paragraph: `
      <p>
        In a heartwarming event organized by local therapists, children and parents gathered for a day of joy. There were art displays, poetry readings, and emotional testimonies from families.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class=" md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">
            What made it memorable?
          </p>
          <p>
            Every child was honored — with applause, awards, and hugs. “It’s the first time we felt seen,” said a father, wiping tears after his son’s drawing got framed.
          </p>
          <p>
            The event ended with a group circle dance — parents and kids alike.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0020.jpg" alt="Community celebration in Bengal" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        From silence to celebration, West Bengal is building bridges of acceptance — one story at a time.
      </p>
    `,
    },
  },

  //uttar pradesh

  {
    id: 41,
    img: "/IMG-20250727-WA0021.jpg",
    title: "Uttar Pradesh",
    link: "/news",
    desc: "On World Autism Day, Lucknow hosted a special gathering calling for better awareness and early intervention.",
    subtab: {
      id: 42,
      heading: "",
      paragraph: `
      <p>
        On World Autism Day, a workshop was held in Lucknow featuring senior health officials and child development experts. Discussions emphasized recognizing autism between 6 months to 3 years and providing timely care.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class="md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">Key Message</p>
          <p>
            “Autism is a developmental condition, not a disease,” said Dr. Rajeev. He outlined early signs like delayed speaking, repetitive actions, and difficulty maintaining eye contact.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0021.jpg" alt="Health seminar in Lucknow" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        The session closed with a pledge to educate more parents and teachers, especially in rural areas.
      </p>
    `,
    },
  },
  {
    id: 43,
    img: "/IMG-20250727-WA0022.jpg",
    title: "Uttar Pradesh",
    link: "/news",
    desc: "Doctors urge parents to look for developmental cues between 6 months and 3 years.",
    subtab: {
      id: 44,
      heading: "",
      paragraph: `
      <p>
        A focused session explained the timeline of autism-related symptoms and how early intervention can lead to better outcomes.
      </p>
      <p>
        Dr. Rajeev emphasized that timely detection can prevent learning and social setbacks. Common symptoms include lack of speech, reduced eye contact, and staying aloof.
      </p>
      <div class="flex flex-col gap-5 md:flex-row">
        <div class="md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">Doctor’s Advice</p>
          <p>
            “Parents should start observing from infancy. Don’t delay consulting professionals if signs appear,” he said. Health Minister Banna Gupta promised to raise the matter with the Education Ministry.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0022.jpg" alt="Doctors speak at autism awareness" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>
    `,
    },
  },
  {
    id: 45,
    img: "/IMG-20250727-WA0023.jpg",
    title: "Uttar Pradesh",
    link: "/news",
    desc: "“No Discrimination Against Autism” – Leaders send out a message of unity on World Autism Day.",
    subtab: {
      id: 46,
      heading: "",
      paragraph: `
      <p>
        At a press event, ministers and officials released a guidebook for autism support and pledged government assistance for affected families. The event included real stories of children who attended the workshop.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class="md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">Case Stories</p>
          <ul class="list-disc pl-4">
            <li>A child who couldn’t speak at age 4 now sings poems.</li>
            <li>Parents of a child with sensory issues spoke of school rejection — and now hope for change.</li>
          </ul>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0023.jpg" alt="Leaders launch autism material" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        Officials promised that special children will be given school access, therapeutic support, and parental guidance.
      </p>
    `,
    },
  },
  {
    id: 47,
    img: "/IMG-20250727-WA0024.jpg",
    title: "Uttar Pradesh",
    link: "/news",
    desc: "With early diagnosis, the impact of autism can be reduced, says Health Minister.",
    subtab: {
      id: 48,
      heading: "",
      paragraph: `
      <p>
        The fourth session focused on hope — that with early identification, much of autism’s challenge can be eased. Health officials stressed love, patience, and awareness.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class="md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">Minister’s Message</p>
          <p>
            “Recognize autism early and treat it with love, not fear,” said Banna Gupta. Parents shared that knowing the signs made all the difference.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0024.jpg" alt="Emotional awareness session" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        A message of compassion echoed through the venue — one of love, support, and acceptance.
      </p>
    `,
    },
  },
  {
    id: 49,
    img: "/IMG-20250727-WA0025.jpg",
    title: "Uttar Pradesh",
    link: "/news",
    desc: "Government schools to include special educators for better autism care.",
    subtab: {
      id: 50,
      heading: "",
      paragraph: `
      <p>
        The final session concluded with an official announcement — special teachers will be appointed in government schools to support children with autism.
      </p>

      <div class="flex flex-col gap-5 md:flex-row">
        <div class="md:w-1/2">
          <p class="text-muted-foreground text-3xl font-bold">Systemic Change</p>
          <p>
            The Health Department will propose necessary infrastructure, including therapy rooms and trained staff. Homeopathy and other supportive therapies will also be introduced.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="/IMG-20250727-WA0025.jpg" alt="Autism-friendly policy update" class="w-full h-96 overflow-auto object-cover"/>
        </div>
      </div>

      <p>
        With these steps, Uttar Pradesh aims to turn awareness into long-term support.
      </p>
    `,
    },
  },
];
