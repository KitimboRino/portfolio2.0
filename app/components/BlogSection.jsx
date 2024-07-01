import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";

const latestWorks = [
  {
    title: "Gestures Ug website",
    imageUrl: "/images/Gestures.png",
    link: "https://gestures-ug.com"
  },
  {
    title: "Sentinel Digital Tech Website",
    imageUrl: "/images/SDT.png",
    link: "https://sentineldigitaltechnologies.com"
  },
  {
    title: "World Merit Platform",
    imageUrl: "/images/WorldMerit.png",
    link: "https://worldmerit.org"
  }
];

function BlogSection() {
  return (
    <main className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch  rounded-3xl border-solid">
      <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pt-44 pb-8 rounded-t-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
        <Image
          src="/images/hero.jpeg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="z-0"
        />
        <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10 relative z-10">
          <div className="items-start flex max-w-full flex-col self-start">
            <h2 className="text-neutral-50 text-5xl font-light leading-[120%] self-stretch">
              Blog
            </h2>
            <p className="text-neutral-50 text-2xl font-light leading-[140%] self-stretch">
              I write about studying, work, travelling, freelancing,<br /> tech, UI, UX and more.
            </p>
          </div>
        </section>
      </div>
      <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pb-8 rounded-b-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
        <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10">
          <div className="items-start flex w-[330px] max-w-full flex-col self-start">
            <h2 className="text-neutral-50 text-5xl font-light leading-[120%] self-stretch">
              Articles
            </h2>
            <p className="text-neutral-50 text-2xl font-light leading-[140%] self-stretch">
              Filter articles with interested topics.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BlogSection;
