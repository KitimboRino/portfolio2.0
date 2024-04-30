import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";



function AboutHeroSection() {
    return (
        <main className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch rounded-3xl border-solid">
            <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pt-44 pb-8 rounded-t-3xl max-md:max-w-full max-md:pt-24 max-md:px-5" style={{ backgroundImage: 'url("/images/img.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className="max-w-[1081px] justify-end items-start self-start flex w-full flex-col mt-32 max-md:max-w-full max-md:mt-10">
                    <h2 className="text-neutral-50 text-6xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full">
                        Passionate about<br />
                        designing/ developing UI for<br />
                        web, mobile applications and<br />
                        interactive apps.</h2>
                    <p className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full mt-6"> Front End Engineer | UI/UX Designer <br /> Designer at World Merit Org. </p>
                    <p className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full mt-6"> World Merit Org, Dec 2022 - Present </p>
                </section>
                <div className="flex flex-row items-start justify-start self-start space-x-4">
                    <a href="mailto:your.kitimborinoemma0580@gmail.com" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex w-[270px] max-w-full flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] self-stretch flex w-full items-start justify-between gap-1.5 pl-3 pr-3 py-3 rounded-xl border-solid">
                            <IoMailOutline className="aspect-square text-neutral-50 object-contain object-center w-[18px] justify-center items-center overflow-hidden self-stretch max-w-full" />
                            <p className="text-neutral-50 text-sm font-light leading-[120%] self-stretch"> kitimborinoemma0580@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://github.com/KitimboRino" target="_blank" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] items-start justify-between gap-1.5 pl-1 pr-1 py-1 rounded-xl border-solid">
                            <Image
                                loading="lazy"
                                src="/images/github.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/rino-kitimbo-881090116/" target="_blank" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex max-w-full flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] items-start justify-between gap-1.5 pl-1 pr-1 py-1 rounded-xl border-solid">
                            <Image
                                loading="lazy"
                                src="/images/linkedin.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/life_of_kred/" target="_blank" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex max-w-full flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] items-start justify-between gap-1.5 pl-1 pr-1 py-1 rounded-xl border-solid">
                            <Image
                                loading="lazy"
                                src="/images/instagram.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                    <a href="https://twitter.com/RiNO_KED" target="_blank" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex max-w-full flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] items-start justify-between gap-1.5 pl-1 pr-1 py-1 rounded-xl border-solid">
                            <Image
                                loading="lazy"
                                src="/images/twitter.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                    <a href="https://wa.me/+256706144964" target="_blank" className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center self-start flex max-w-full flex-col my-auto rounded-xl mt-4">
                        <div className="border border-[color:var(--madiyour-com-alabaster-29,rgba(250,250,250,0.29))] items-start justify-between gap-1.5 pl-1 pr-1 py-1 rounded-xl border-solid">
                            <Image
                                loading="lazy"
                                src="/images/whatsapp.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                </div>
            </div>

            {/* <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pb-8 rounded-b-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
                <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10">
                    <div className="items-start flex w-[330px] max-w-full flex-col self-start">
                        <h2 className="text-neutral-50 text-lg font-light leading-[120%] self-stretch">
                            Latest Works
                        </h2>
                        <p className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-stretch">
                            Take a look at some projects I&apos;ve worked on.
                        </p>
                    </div>
                </section>
            </div> */}
        </main >
    )
}

export default AboutHeroSection