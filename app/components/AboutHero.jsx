import React from 'react';
import Image from 'next/image';

import { IoMailOutline } from 'react-icons/io5';

// JSON data for contact links
const contactLinks = [
  {
    href: 'mailto:your.kitimborinoemma0580@gmail.com',
    icon: <IoMailOutline className="aspect-square text-neutral-50 object-contain object-center w-[18px] justify-center items-center overflow-hidden self-stretch max-w-full" />,
    label: 'kitimborinoemma0580@gmail.com',
    isImage: false,
  },
  {
    href: 'https://github.com/KitimboRino',
    imageUrl: '/images/github.png',
    alt: 'GitHub Logo',
    isImage: true,
  },
  {
    href: 'https://www.linkedin.com/in/rino-kitimbo-881090116/',
    imageUrl: '/images/linkedin.png',
    alt: 'LinkedIn Logo',
    isImage: true,
  },
  {
    href: 'https://www.instagram.com/life_of_kred/',
    imageUrl: '/images/instagram.png',
    alt: 'Instagram Logo',
    isImage: true,
  },
  {
    href: 'https://twitter.com/RiNO_KED',
    imageUrl: '/images/twitter.png',
    alt: 'Twitter Logo',
    isImage: true,
  },
  {
    href: 'https://wa.me/+256706144964',
    imageUrl: '/images/whatsapp.png',
    alt: 'WhatsApp Logo',
    isImage: true,
  },
];

function AboutHeroSection() {
  return (
    <main className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch rounded-3xl border-solid">
      <div className="justify-end items-center bg-neutral-900 self-stretch relative flex grow flex-col pl-20 pr-20 pt-44 pb-8 rounded-3xl max-md:max-w-full max-md:pt-24 max-md:px-5">
        <Image
          src="/images/img.png"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="z-0 rounded-3xl"
        />
        <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full relative z-10">
          <section className="max-w-[1081px] justify-end items-start self-start flex w-full flex-col mt-22 max-md:max-w-full max-md:mt-10">
            <h2 className="text-neutral-50 text-6xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full">
              Passionate about<br />
              designing/ developing UI for<br />
              web, mobile applications and<br />
              interactive apps.
            </h2>
            <p className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full">
              Front End Engineer | UI/UX Designer <br /> at World Merit Org.
            </p>
            <p className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-2 max-md:max-w-full">
              World Merit Org, Dec 2022 - Present
            </p>
          </section>
          <div className="flex flex-wrap justify-center mt-2 md:justify-start space-x-3 md:space-x-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center flex flex-col my-auto rounded-xl mb-4 md:mb-0"
              >
                <div className="border border-[rgba(250,250,250,0.29)] flex w-full items-start justify-between gap-1.5 p-1.5 rounded-xl">
                  {link.isImage ? (
                    <Image
                      loading="lazy"
                      src={link.imageUrl}
                      alt={link.alt}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <>
                      {link.icon}
                      <p className="text-neutral-50 text-sm font-light leading-[120%]">
                        {link.label}
                      </p>
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutHeroSection;
