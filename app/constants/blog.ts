import { TBlog } from "./type";
import flower from '../../public/images/flower.jpg';

export const blogs: TBlog[] = [
  {
    id: "nextjs-setup",
    title: "Getting Started with Next.js",
    description: "A beginner-friendly guide to setting up a Next.js project.",
    image: {
        src: flower,
        alt: "Flower",
    },
    date: "January 10, 2024",
    link: "/blog/nextjs-setup",
  },
  {
    id: "tailwind-guide",
    title: "Mastering Tailwind CSS",
    description: "Learn how to use Tailwind CSS to build beautiful UIs quickly.",
    image: {
        src: flower,
        alt: "Flower",
    },
    date: "February 5, 2024",
    link: "/blog/tailwind-guide",
  },
  {
    id: "react-performance",
    title: "Optimizing React Performance",
    description: "Tips and best practices for improving performance in React apps.",
    image: {
        src: flower,
        alt: "Flower",
    },
    date: "March 15, 2024",
    link: "/blog/react-performance",
  },
  {
    id: "react-perfume",
    title: "Optimizing React Performance",
    description: "Tips and best practices for improving performance in React apps.",
    image: {
        src: flower,
        alt: "Flower",
    },
    date: "March 15, 2024",
    link: "/blog/react-performance",
  },
];
