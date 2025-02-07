import { TConfig } from "./type";

export const config: TConfig = {
  html: {
    title: "Amanuel Daniel— 3D Portfolio",
    fullName: "Amanuel Daniel Merdasa",
    email: "2000amandanm@gmail.com",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a software developer skilled in TypeScript, JavaScript, Flutter, 
        React, Node.js, and more. I create scalable, user-friendly web and mobile apps, 
        leveraging technologies like Docker, Firebase, and TensorFlow. My focus is on 
        delivering innovative solutions tailored to modern needs.`,
    },
    experience: {
      p: "What I've done",
      h2: "Work Experience",
      content: `I am a software developer with expertise in AI, 
        web, and mobile development. My projects range from creating 
        collaborative platforms and AI tools to designing scalable e-commerce systems 
        and microservices architectures.`,
    },
    feedbacks: {
      p: "What they say",
      h2: "Testimonials",
      content: `Hear from those I've worked with and how my contributions helped shape their projects.`,
    },
    works: {
      p: "Portfolio",
      h2: "Projects",
      content: `Here are some of the projects that highlight my expertise, with links to 
        code repositories and live demos. These works showcase my problem-solving skills 
        and adaptability across various technologies.`,
    },
    tech: {
      p: "Tech Stack",
      h2: "Technologies",
      content: `Explore the tools and technologies I use to craft innovative solutions. 
        From frontend frameworks to backend systems, my stack ensures seamless project delivery.`,
    },
    footer: {
      title: "Connect with Me",
      content: `Feel free to reach out to me for any inquiries or collaborations. You can contact me via email or follow me on social media. Let's create something amazing together!`,
      copyright: "© 2025 Your Name. All rights reserved.",
    },
  },
};
