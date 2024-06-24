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

function HeroSection() {
  return (
    <main className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch  rounded-3xl border-solid">
      <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pt-44 pb-8 rounded-t-3xl max-md:max-w-full max-md:pt-24 max-md:px-5" style={{ backgroundImage: 'url("/images/hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <section className="flex w-[634px] max-w-full flex-col mr-40 self-end max-md:mr-2.5" >
          <div className="justify-center items-center bg-opacity-30 self-center flex w-[142px] max-w-full flex-col rounded-xl">
            <Link href="/Rino_Kitimbo_Resume.pdf" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center bg-zinc-50 bg-opacity-30 self-stretch flex w-[149px] max-w-full flex-col rounded-xl">
              <div className="border border-[color:var(--com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full grow flex-col pt-2 pb-8 px-8 rounded-xl border-solid max-md:px-5">
                <h1 className="text-neutral-50 text-6xl font-thin leading-[140%] self-center max-md:text-4xl"> + </h1>
                <p className="text-neutral-50 text-sm font-light leading-[140%] self-stretch">Download my resume</p>
              </div>
            </Link>
          </div>
          <div className="self-stretch flex w-full items-start justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <Link href="tel:+256706144964" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center bg-zinc-50 bg-opacity-30 self-stretch flex w-[149px] max-w-full flex-col rounded-xl">
              <div className="border border-[color:var(--com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full items-start justify-between gap-3 pl-3 pr-4 py-2 rounded-xl border-solid">
                <Image
                  loading="lazy"
                  src="/images/Rino.jpeg"
                  className="rounded-full object-cover"
                  alt="Book a call"
                  width={38}
                  height={38}
                />
                <div className="items-start self-center flex flex-col my-auto">
                  <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> Book a call{" "} </p>
                  <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> with me </p>
                </div>
              </div>
            </Link>
            <Link href="mailto:your.kitimborinoemma0580@gmail.com" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center bg-zinc-50 bg-opacity-30 self-center flex w-[135px] max-w-full flex-col my-auto rounded-xl">
              <div className="border border-[color:var(--com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full items-start justify-between gap-1.5 pl-3 pr-3 py-2 rounded-xl border-solid">
                <IoMailOutline className="aspect-square text-neutral-50 object-contain object-center w-[18px] justify-center items-center overflow-hidden self-stretch max-w-full" />
                <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> Drop e-mail </p>
              </div>
            </Link>
          </div>
        </section>
        <section className="max-w-[1081px] justify-end items-start self-start flex w-full flex-col mt-32 max-md:max-w-full max-md:mt-10">
          <h2 className="text-neutral-50 text-5xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full"> Front End Dev Designing/ developing UIs for web, mobile, applications and interactive apps </h2>
          <p className="text-neutral-50 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full"> I design and develop experiences that <br /> make peoples lives simple. </p>
        </section>
      </div>
      <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pb-8 rounded-b-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
        <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10">
          <div className="items-start flex w-[330px] max-w-full flex-col self-start">
            <h2 className="text-neutral-50 text-lg font-light leading-[120%] self-stretch">
              Latest Works
            </h2>
            <p className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-stretch">
              Take a look at some projects I&apos;ve worked on.
            </p>
          </div>
          <div className="self-stretch mt-6 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              {latestWorks.map((work, index) => (
                <div key={index} className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                  <div className="justify-center items-start flex flex-col max-md:mt-2.5">
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        loading="lazy"
                        src={work.imageUrl}
                        alt={work.title}
                        placeholder='blur'
                        blurDataURL='/images/logo.png'
                        width={400}
                        height={400}
                        className='hover:scale-105 transition-transform duration-300 ease-in-out'
                      />
                    </a>
                    <div className="justify-center items-start self-stretch flex grow flex-col mt-4">
                      <p className="text-neutral-50 text-base leading-[110%] self-stretch">
                        {work.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-center items-center flex w-[127px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
            <Link href="/works" className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid hover:scale-105 transition-transform duration-300 ease-in-out">
              More Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HeroSection;
