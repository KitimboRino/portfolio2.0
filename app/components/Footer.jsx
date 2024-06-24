import React from 'react'
import Link from 'next/link'
import Image from "next/image";

// Define the works data
const worksData = [
    {
        src: "/images/wmplatform.png",
        alt: "Webs App | World Merit Platform",
        description: "World Merit Org | Web App | NextJS",
        link: "https://platform.worldmerit.org/"
    },
    {
        src: "/images/littlelemon.png",
        alt: "ReactJS | Resturant Website",
        description: "Little Lemon | Web App | ReactJS",
        link: "https://meta-developer-frontend-capstone-project-rixm3lquo-krino0580.vercel.app/"
    },
    {
        src: "/images/finalspace.png",
        alt: "Website",
        description: "Final Space Characters | Website | ReactJS",
        link: "https://final-space-characters.netlify.app/"
    }
];

function Footer() {
    return (
        <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <div className="items-start flex w-[198px] max-w-full flex-col self-start">
                    <h2 className="text-neutral-50 text-lg font-light leading-[120%] self-stretch">
                        Explore My Work
                    </h2>
                    <p className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-stretch">
                        Take a look at some works
                    </p>
                </div>
                <div className="self-stretch mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {worksData.map((work, index) => (
                            <div key={index} className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                <div className="justify-center items-start flex flex-col max-md:mt-2.5">
                                    <a href={work.link} target="_blank" rel="noopener noreferrer">

                                        <Image
                                            loading="lazy"
                                            src={work.src}
                                            alt={work.alt}
                                            className='hover:scale-105 transition-transform duration-300 ease-in-out aspect-[1.12] object-contain object-center w-full overflow-hidden self-stretch'
                                            width={200}
                                            height={200}
                                        />
                                    </a>
                                    <div className="justify-center items-start self-stretch flex grow flex-col mt-4">
                                        <p className="text-neutral-50 text-base leading-[110%] self-stretch">
                                            {work.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="justify-center items-center flex w-[62px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
                    <Link href="/works" className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid hover:scale-105 transition-transform duration-300 ease-in-out">
                        More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer