export type Illustration = {
  id: string;
  title: string;
  year: string;
  medium: string;
  alt: string;
  src: string;
  thumbSrc: string;
  fallbackSrc: string;
};

/** First six pieces from Ana's attachment set, in order. */
export const illustrations: Illustration[] = [
  {
    id: "nest-pile",
    title: "Griffin Nest",
    year: "2011",
    medium: "Digital painting",
    alt: "Three griffin-like creatures sleeping together on a pile of colorful pillows in a sunlit cave",
    src: "/illustrations/nest-pile.webp",
    thumbSrc: "/illustrations/nest-pile-thumb.webp",
    fallbackSrc: "/illustrations/nest-pile.jpg",
  },
  {
    id: "golden-pagoda",
    title: "Japan-Style Background",
    year: "2011",
    medium: "Digital painting",
    alt: "A golden Japanese pagoda in a field of yellow flowers with sunbeams and misty mountains",
    src: "/illustrations/golden-pagoda.webp",
    thumbSrc: "/illustrations/golden-pagoda-thumb.webp",
    fallbackSrc: "/illustrations/golden-pagoda.jpg",
  },
  {
    id: "antlered-griffin",
    title: "Griffin Family",
    year: "2010",
    medium: "Digital painting",
    alt: "A large antlered griffin with two smaller companions in a rocky landscape beside a waterfall",
    src: "/illustrations/antlered-griffin.webp",
    thumbSrc: "/illustrations/antlered-griffin-thumb.webp",
    fallbackSrc: "/illustrations/antlered-griffin.jpg",
  },
  {
    id: "dual-worlds",
    title: "Japanese Sense of Beauty",
    year: "2010",
    medium: "Digital painting",
    alt: "Circular illustration split between a bright fantasy water world and a dark volcanic industrial world",
    src: "/illustrations/dual-worlds.webp",
    thumbSrc: "/illustrations/dual-worlds-thumb.webp",
    fallbackSrc: "/illustrations/dual-worlds.jpg",
  },
  {
    id: "smaug-and-bilbo",
    title: "Smaug & Bilbo",
    year: "2012",
    medium: "Pencil illustration",
    alt: "Pencil drawing of a reclining dragon facing a young adventurer, with a treasure cup, chest, and scattered gold",
    src: "/illustrations/smaug-and-bilbo.webp",
    thumbSrc: "/illustrations/smaug-and-bilbo-thumb.webp",
    fallbackSrc: "/illustrations/smaug-and-bilbo.jpg",
  },
  {
    id: "anubis-crocodiles",
    title: "Myth of Osiris and Seth",
    year: "2009",
    medium: "Traditional illustration",
    alt: "An Anubis-like figure feeding crocodiles on the banks of a river with Egyptian architecture beyond",
    src: "/illustrations/anubis-crocodiles.webp",
    thumbSrc: "/illustrations/anubis-crocodiles-thumb.webp",
    fallbackSrc: "/illustrations/anubis-crocodiles.jpg",
  },
];
