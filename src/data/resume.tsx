import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ashutosh swain",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science undergrad passionate about building, breaking, and learning through code. Always exploring new technologies and eager to tackle new challenges.",
  summary:
    "I started coding in college and quickly found it both interesting and fun. I'm driven by the desire to build things that can make a real difference in people's daily lives. I'm also a member of one of our college's top tech clubs, CodeChef. My interests lie primarily in backend development and Web3 technologies. ",
  avatarUrl: "/Profile.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Express",
    "Postgres",
    "Rust",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ASHUTOSH-SWAIN-GIT",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/ashutosh-swain-8154a3308",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/LowKeyDevs",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

 
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "#",
      degree: "B-Tech in Information Technology",
      logoUrl: "/vit.png",
      start: "2024",
      end: "2028",
    },
    
  ],
  projects: [
{
      title: "Chatify",
      href: "https://chat-pr-mauve.vercel.app/",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "This was my first full stack a basic chat application built with MERN stack. It allows users to register, login, and chat with each other in real-time. The application uses Socket.io for real-time communication and MongoDB for data storage.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
      ],
        
      links: [
        {
          type: "Website",
          href: "https://chat-pr-mauve.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ASHUTOSH-SWAIN-GIT/CHAT_PR",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screenshot.png",
      video: "",
    },
    {
      title: "Yc directory",
      href: "https://yc-directory-eight-azure.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Next.js project where startups can pitch their ideas and products. This project is built with  Sanity CMS, allowing users to explore various startups and their details.",
      technologies: [
        "Next.js",
        "sanity",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://yc-directory-eight-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ASHUTOSH-SWAIN-GIT/NEXT_PR",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yc.png",
      video: "",
    },
     {
      title: "Flipwise",
      href: "https://flashcard-two-chi.vercel.app/",
      dates: "July 2025 - Present",
      active: true,
      description:
        "Built this frontend project for a hackathon.",
      technologies: [
        "Next.js",
        "Gsap",
        "Framer Motion",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://flashcard-two-chi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ASHUTOSH-SWAIN-GIT/flashcard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flipwise.png",
      video: "",
    },
   
    
  ],
  
} as const;
