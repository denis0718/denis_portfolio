"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1
            className="mb-4 lg:text-5xl !leading-tight text-3xl color-blue text-blue-400"
          >
            Welcome to my Web <br /> Development Portofolio!
          </h1>
          <h5
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Denis Prosvietov, a passionate web developer based in Ukraine. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </h5>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/photo.png"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
