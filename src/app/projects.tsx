"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/tma.png",
    title: "TMA Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    githubURL: 'https://github.com/denis0718/Telegram-MiniApp',
    projectURL: ''
  },
  {
    img: "/image/restaurant.jpg",
    title: "Full Stack Web Development",
    desc: "Promotional landing page for a restaurant website from scratch based on Figma design.",
    githubURL: 'https://github.com/denis0718/Erin-Restaurant',
    projectURL: 'https://dimt.co.uk/'
  },
  {
    img: "/image/ton.jpg",
    title: "TON Smart Contract Development",
    desc: "Develop smart contract to process fast transaction and enable support a wide variety of dApp",
    githubURL: 'https://github.com/denis0718/TON_SmartContract',
    projectURL: ''
  },
  {
    img: "/image/frontend.jpg",
    title: "Front End Development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    githubURL: 'https://github.com/denis0718/Vue_Comp',
    projectURL: 'https://www.socialfoodies.dk/'
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          my skills
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
