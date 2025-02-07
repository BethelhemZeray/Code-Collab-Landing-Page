import { THero } from "./type";
import profile from '../../public/images/banner.png';
import Architecture from '../../public/images/architecture.jpg';

export const hero: THero[] = [
  {
    name: "Amanuel Daniel",
    skills: [
      "UI/UX Designer.",
      "Web Designer.",
      "Web Developer.",
      "Mobile App Developer.",
    ],
    description: "I am a software developer with expertise in AI, web, and mobile development. My projects range from creating collaborative platforms and AI tools to designing scalable e-commerce systems and microservices architectures.",
    profileImage: {
      src: profile,
      alt: "Amanuel Daniel",
    },
    backgroundImage: {
      src: Architecture,
      alt: "Architecture",
    },
  },
];
