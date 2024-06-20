'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import FilterButton from './FilterButton';

// JSON data for contact links
const works = [
  {
    title: "Gestures Ug website",
    imageUrl: "/images/Gestures.png",
    link: "https://gestures-ug.com",
    description: "A website for a local company that deals in manufucturing furniture",
    categories: ["Web Development", "UI/UX Design", "Landing Pages"]
  },
  {
    title: "Sentinel Digital Tech Website",
    imageUrl: "/images/SDT.png",
    link: "https://sentineldigitaltechnologies.com",
    description: "A website for a tech start-up company.",
    categories: ["Web Development", "UI/UX Design", "Landing Pages"]
  },
  {
    title: "World Merit Platform",
    imageUrl: "/images/WorldMerit.png",
    link: "https://worldmerit.org",
    description: "A platform for a global community that deals in social impact projects.",
    categories: ["Web Development", "UI/UX Design", "Graphic Design", "Landing Pages"]
  },
  {
    title: "Little Lemon",
    imageUrl: "/images/littlelemon.png",
    link: "https://meta-developer-frontend-capstone-project-rixm3lquo-krino0580.vercel.app/",
    description: "A website for a restaurant called Little Lemon",
    categories: ["Web Development", "Graphic Design", "UI/UX Design", "Landing Pages"]
  },
  {
    title: "Final Space Characters",
    imageUrl: "/images/finalspace.png",
    link: "https://final-space-characters.netlify.app/",
    description: "Final Space Characters characters website",
    categories: ["Website", "Graphic Design", "UI/UX Design", "Landing Pages"]
  }
];


function WorksCard() {
  const [activeFilter, setActiveFilter] = useState('Web Development');
  const filters = [
    'Web Development',
    'UI/UX Design',
    'Landing Pages',
    'Graphic Design'
  ];

  const filteredItems = works.filter(item => item.categories.includes(activeFilter));

  return (
    <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 mt-22 max-md:max-w-full">
        <h2 className="text-3xl mb-4">Works</h2>
        <p className="text-neutral-50 text-2xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          All my works across all industries I have ever been to. <br />You can find various of projects here.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter, index) => (
            <FilterButton
              key={index}
              label={filter}
              active={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        {/* Works */}
        <div className="flex flex-wrap">
          {filteredItems.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 ">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  placeholder='blur'
                  blurDataURL='/images/logo.png'
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out" />
                <div className="p-4">
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <div className="inline-block mt-2 bg-gray-700 text-sm py-1 px-3 rounded">
                    {item.categories.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksCard;
