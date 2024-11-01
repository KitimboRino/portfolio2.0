'use client';
import React, { useState } from 'react'
import Image from "next/image";
import { Link } from "next-view-transitions";
import FilterButton from './FilterButton';


const articles = [
  {
    title: "Unveiling the Journey: What Happens When You Type https://www.google.com and Hit Enter?",
    imageUrl: "/images/google.png",
    link: "https://medium.com/@kitimborinoemma0580/unveiling-the-journey-what-happens-when-you-type-https-www-google-com-and-hit-enter-9057b6e688e9",
    categories: ['Tech', 'Study']
  },
  {
    title: 'Defensive programming',
    imageUrl: '/images/defense.png',
    link: 'https://medium.com/@kitimborinoemma0580/defensive-programming-451ea505bb62',
    description: 'A website for a tech start-up company.',
    categories: ['Tech', 'Study']
  },
  {
    title: "The Authentication Adventure: Unraveling the Mystery Behind the Great Login Lockout",
    imageUrl: "/images/authblog.png",
    link: "https://medium.com/@kitimborinoemma0580/the-authentication-adventure-unraveling-the-mystery-behind-the-great-login-lockout-75fc8e83ecf3",
    categories: ['Tech']
  },
  {
    title: "How to Learn, unlearn and Relearn",
    imageUrl: "/images/logo.png",
    link: "https://medium.com/@kitimborinoemma0580/how-to-learn-unlearn-and-relearn-c2101073bbe1",
    categories: ['Tech','Study']
  },
];

function BlogSection() {
  const [activeFilter, setActiveFilter] = useState('Tech');
  const filters = [
    'Tech',
    'Study',
    'UI/UX',
    'Travel',
    'Freelancing',
    'Random',
    'Golf'
  ];

  const filteredItems = articles.filter(item => item.categories.includes(activeFilter));
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
          className="z-0 rounded-t-3xl"
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
              Filter articles by interested topics.
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 my-4">
            {filters.map((filter, index) => (
              <FilterButton
                key={index}
                label={filter}
                active={filter === activeFilter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>


          {/* Articles */}
          {filteredItems.length === 0 ? (
            <div className="text-center text-neutral-50 my-4">
              I will be adding some soon 
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
              {filteredItems.map((item, index) => (
                <div key={index} className="p-2">
                  <Link href={item.link} passHref target="_blank" rel="noopener noreferrer">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        placeholder="blur"
                        blurDataURL="/images/logo.png"
                        width={400}
                        height={400}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl text-neutral-50 mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h3>
                        <div className="inline-block mt-2 bg-gray-700 text-sm text-zinc-50 text-opacity-60 py-1 px-3 rounded">
                          {item.categories.join(', ')}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default BlogSection;
