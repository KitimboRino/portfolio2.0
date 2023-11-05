import React from 'react'
import Image from "next/image";


function HeroSection() {
  return (
    <main className="justify-end items-center bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(0,0,0,0.19)_57.08%,rgba(0,0,0,0.28)_100%)] self-stretch relative flex grow flex-col pl-20 pr-20 pt-44 pb-8 max-md:max-w-full max-md:pt-24 max-md:px-5">
      <section className="flex w-[634px] max-w-full flex-col mr-40 self-end max-md:mr-2.5">
        <div className="justify-center items-center bg-zinc-50 bg-opacity-30 self-center flex w-[142px] max-w-full flex-col rounded-xl">
          <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full grow flex-col pt-2 pb-8 px-8 rounded-xl border-solid max-md:px-5">
            <h1 className="text-neutral-50 text-6xl font-thin leading-[140%] self-center max-md:text-4xl"> + </h1>
            <p className="text-neutral-50 text-sm font-light leading-[140%] self-stretch"> Start project </p>
          </div>
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <a href="..." className="justify-center items-center bg-zinc-50 bg-opacity-30 self-stretch flex w-[149px] max-w-full flex-col rounded-xl">
            <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full items-start justify-between gap-3 pl-3 pr-4 py-2 rounded-xl border-solid">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d83f451-9002-4f37-ac15-207748a69420?apiKey=f742a22b09984b259f2749b8e77545e3"
                alt="Book a call"
                className="aspect-square object-contain object-center w-[38px] overflow-hidden self-stretch max-w-full"
                width={10}
                height={10}
              />
              <div className="items-start self-center flex flex-col my-auto">
                <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> Book a call{" "} </p>
                <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> with me </p>
              </div>
            </div>
          </a>
          <a href="..." className="justify-center items-center bg-zinc-50 bg-opacity-30 self-center flex w-[124px] max-w-full flex-col my-auto rounded-xl">
            <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full items-start justify-between gap-1.5 pl-3 pr-3 py-2 rounded-xl border-solid">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a1f373-7c97-4a5f-9217-9032b35c8578?apiKey=f742a22b09984b259f2749b8e77545e3&"
                alt="Drop e-mail"
                className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden self-stretch max-w-full"
                width={10}
                height={10}
              />
              <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> Drop e-mail </p>
            </div>
          </a>
        </div>
      </section>
      <section className="max-w-[1081px] justify-end items-start self-center flex w-full flex-col mt-32 max-md:max-w-full max-md:mt-10">
        <h2 className="text-neutral-50 text-5xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full"> Front End Dev Designing/ developing UIs for web, mobile, applications and interactive apps </h2>
        <p className="text-neutral-50 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full"> Personal website where you can find a <br /> lot about me and what I do </p>
      </section>


      <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10">
        <div className="items-start flex w-[330px] max-w-full flex-col self-start">
          <h2 className="text-neutral-50 text-lg font-light leading-[120%] self-stretch">
            Latest Works
          </h2>
          <p className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-stretch">
            Take a look at some projects I've worked on.
          </p>
        </div>{" "}
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="justify-end items-start flex grow flex-col rounded-md max-md:mt-2.5">
                <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1168478260869565] grow w-full">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/772a7bb1-deb6-4072-af80-35746ca233d6?apiKey=f742a22b09984b259f2749b8e77545e3"
                    alt="Guild Digital"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    width={10}
                    height={10}
                  />
                  <div className="relative bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_86.25%,rgba(0,0,0,0.77)_100%)] self-stretch flex w-full grow flex-col pl-3 pr-20 pt-80 pb-3 max-md:pr-5 max-md:pt-24">
                    <h3 className="justify-center items-center flex w-[91px] max-w-full flex-col self-start">
                      Guild Digital
                    </h3>
                    <p className="text-neutral-400 text-sm leading-[110%] self-stretch">
                      Website
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-end items-start flex grow flex-col rounded-md max-md:mt-2.5">
                <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1141304347826086] grow w-full">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/207e9629-77c5-4e13-8979-411c88ffef85?apiKey=f742a22b09984b259f2749b8e77545e3"
                    alt="Gesture"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    width={10}
                    height={50}
                  />
                  <div className="relative bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_86.25%,rgba(0,0,0,0.77)_100%)] self-stretch flex w-full grow flex-col pl-3 pr-20 pt-80 pb-3 max-md:pr-5 max-md:pt-24">
                    <h3 className="justify-center items-center flex w-[60px] max-w-full flex-col self-start">
                      Gesture
                    </h3>
                    <p className="text-neutral-400 text-sm leading-[110%] self-stretch">
                      Website
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-end items-start flex grow flex-col rounded-md max-md:mt-2.5">
                <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1168478260869565] grow w-full">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90f9fcbd-ce16-49be-a81c-ad2db2ecfce9?apiKey=f742a22b09984b259f2749b8e77545e3"
                    alt="Website"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    width={10}
                    height={10}
                  />
                  <div className="relative text-neutral-400 text-sm leading-[110%] self-stretch bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_86.25%,rgba(0,0,0,0.77)_100%)] w-full grow pl-3 pr-20 pt-80 pb-3 max-md:pr-5 max-md:pt-24">
                    Website
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="justify-center items-center flex w-[127px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
          <button
            // onClick={handleButtonClick}
            className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid"
          >
            More Projects
          </button>
        </div>
      </section>
    </main>
  )
}

export default HeroSection