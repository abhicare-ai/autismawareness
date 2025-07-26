export type AutismInformationArray = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}[];

export type exploreType = {
  id: number;
  img: string;
  title: string;
  link: string;
  subtab: exploresubtabType;
  desc: string;
};

export type exploresubtabType = {
  id: number;
  heading: string;
  paragraph: string;
};

export type stateNameType = {
  id: number;
  stateName: string;
};
