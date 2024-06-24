import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// JSON data for software tools
const softwareTools = [
  {
    name: 'Framer',
    imageUrl: '/images/framer.png',
    alt: 'Framer Logo'
  },
  {
    name: 'Figma',
    imageUrl: '/images/figma.png',
    alt: 'Figma Logo'
  },
  {
    name: 'ReactJS',
    imageUrl: '/images/react.png',
    alt: 'ReactJS Logo'
  },
  {
    name: 'Notion',
    imageUrl: '/images/notion.png',
    alt: 'Notion Logo'
  },
  {
    name: 'Trello',
    imageUrl: '/images/trello.png',
    alt: 'Trello Logo'
  },
  {
    name: 'NextJS',
    imageUrl: '/images/nextjs.png',
    alt: 'NextJS Logo'
  },
  {
    name: 'Slack',
    imageUrl: '/images/slack.png',
    alt: 'Slack Logo'
  },
  {
    name: 'Spotify',
    imageUrl: '/images/spotify.png',
    alt: 'Spotify Logo'
  },
  {
    name: 'zoom',
    imageUrl: '/images/zoom.png',
    alt: 'Zoom Logo'
  }
];

function AboutSection() {
  return (
    <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
        <div className="max-w-[81rem] items-start self-stretch flex flex-col max-md:max-w-full">
          <div className="justify-center items-center flex w-[258px] max-w-full flex-col self-start">
            <div className="text-neutral-50 text-3xl font-light leading-[120%] self-start">About Rino</div>
            <div className="text-neutral-50 text-lg font-light leading-[120%] self-start">Passionate Front End Engineer</div>
          </div>
          <div className="max-w-[520px] text-zinc-50 text-opacity-60 text-base font-light leading-[140%] mt-4 self-start max-md:max-w-full">
            I am a Front End Engineer and UI/UX Designer. I love grids, simplicity & golf. I am a practising minimalist and simple design addict.
          </div>
          <div className="bg-zinc-800 flex w-full h-px flex-col mt-16 self-start max-md:max-w-full" />
        </div>
        <div className="items-start flex w-[346px] max-w-full flex-col mt-20 self-start max-md:mt-10">
          <div className="text-neutral-50 text-lg font-light leading-[120%] self-start">Stack</div>
          <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-start">Software frameworks and tools I use regularly.</div>
        </div>
        <div className="max-w-[78rem] items-start self-stretch flex gap-2.5 mt-9 mx-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          {softwareTools.map((tool, index) => (
            <div key={index} className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg ">
              <div className="border border-[color:var(--com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
                <Image
                  loading="lazy"
                  src={tool.imageUrl}
                  alt={tool.alt}
                  width={100}
                  height={100}
                  className='hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">{tool.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="items-start flex w-[525px] max-w-full flex-col mt-16 self-start max-md:mt-10">
          <div className="text-neutral-50 text-lg font-light leading-[120%]">Favorite song</div>
          <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-start max-md:max-w-full">I find myself leaning more towards podcasts while I work. It seems that nothing else quite captures my attention like a good podcast does.</div>
        </div>

        {/* Spotify integration */}
        <div className="min-w-[14rem] items-start self-stretch flex flex-col mt-6 rounded-xl max-md:max-w-full">
          <div className="bg-zinc-800 self-stretch px-3 py-3.5 max-w-full" style={{ borderRadius: '12px' }}>
            <iframe src="https://open.spotify.com/embed/show/0Giuw6eNbTzP9CDZODDrA2?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>

        <div className="justify-center items-center flex w-[137px] max-w-full grow flex-col mt-20 rounded-[3.125rem] self-end max-md:mt-10">
          <Link href="/about" className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid hover:scale-105 transition-transform duration-300 ease-in-out">
            More about me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
