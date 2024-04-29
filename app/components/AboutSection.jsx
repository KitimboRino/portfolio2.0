import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function AboutSection() {
  return (
    <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch  bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
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
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/framer.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">Framer</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/figma.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">Figma</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/react.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">ReactJS</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/notion.png"
                alt="Logo"
                width={100}
                height={100}
                className='mt-3'
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-4">Notion</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/trello.svg"
                alt="Logo"
                width={100}
                height={200}
                className='mt-3'
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-4">Trello</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/nextjs.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">NextJS</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/slack.png"
                alt="Logo"
                width={100}
                height={100}
                className='mt-4'
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-8">Slack</div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
              <Image
                loading="lazy"
                src="/images/Spotify.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center mt-3">Spotify</div>
            </div>
          </div>
        </div>
        <div className="items-start flex w-[525px] max-w-full flex-col mt-16 self-start max-md:mt-10">
          <div className="text-neutral-50 text-lg font-light leading-[120%]">Favorite song</div>
          <div className="text-zinc-50 text-opacity-100 text-base font-light leading-[140%] self-start max-md:max-w-full">Me personally, I can not listen anything else but podcasts while working</div>
        </div>

        {/* Spotify integration */}
        <div className="min-w-[14rem] items-start self-stretch flex flex-col mt-6 rounded-xl max-md:max-w-full">
          <div className="bg-zinc-800 self-stretch px-3 py-3.5 max-w-full" style={{ borderRadius: '12px' }}>
            <iframe src="https://open.spotify.com/embed/show/0Giuw6eNbTzP9CDZODDrA2?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>

        <div className="justify-center items-center flex w-[137px] max-w-full grow flex-col mt-20 rounded-[3.125rem] self-end max-md:mt-10">
          <Link href="/about" className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid hover:scale-105 transition-transform duration-300 ease-in-out">
            More about me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection