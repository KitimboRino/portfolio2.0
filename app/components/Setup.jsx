import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stackItems = [
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
        name: 'NextJS',
        imageUrl: '/images/nextjs.png',
        alt: 'NextJS Logo'
    },
    {
        name: 'NodeJS',
        imageUrl: '/images/nodejs.png',
        alt: 'NodeJS Logo'
    },
    {
        name: 'Framer',
        imageUrl: '/images/framer.png',
        alt: 'Framer Logo'
    },
    {
        name: 'WordPress',
        imageUrl: '/images/wp.png',
        alt: 'WordPress Logo'
    },
    {
        name: 'JavaScript',
        imageUrl: '/images/javascript.png',
        alt: 'JavaScript Logo'
    },
    {
        name: 'Flask',
        imageUrl: '/images/flask.png',
        alt: 'Flask Logo'
    },
    {
        name: 'Python',
        imageUrl: '/images/python.png',
        alt: 'Python Logo'
    },
];

const SetupCard = () => {
    return (
        <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Setup Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl text-zinc-50 text-opacity-60 mb-2">Setup</h3>
                        <p className="text-neutral-50 text-2xl mb-4">I spend here most of my time</p>
                        <img src="setup_image_url" alt="Setup" className="rounded-lg" />
                    </div>

                    {/* Stack Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl text-zinc-50 text-opacity-60 mb-2">Stack</h3>
                        <p className="text-neutral-50 text-2xl mb-4">Things I use all the time</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                            {stackItems.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-2 bg-gray-700 rounded-lg">
                                    {/* <div className="bg-gray-600 p-2 rounded-full mb-2"> */}
                                        {/* Replace with actual icon */}
                                        {/* <span className="text-lg">{item.icon}</span> */}
                                        <Image
                                            loading="lazy"
                                            src={item.imageUrl}
                                            alt={item.alt}
                                            width={50}
                                            height={50}
                                            className='hover:scale-105 transition-transform duration-300 ease-in-out'
                                        />
                                    {/* </div> */}
                                    <p className="text-xs text-zinc-50 text-opacity-60">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Screen Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl text-zinc-50 text-opacity-60 mb-2">Screen</h3>
                        <p className="text-neutral-50 text-2xl">Samsung 28 inch monitor</p>
                    </div>

                    {/* Keyboard Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl text-zinc-50 text-opacity-60 mb-2">Keyboard</h3>
                        <p className="text-neutral-50 text-2xl">logitech mx keys</p>
                    </div>

                    {/* Laptop Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">

                            <div>
                                <h3 className="text-xl text-zinc-50 text-opacity-60">Laptop</h3>
                                <p className="text-neutral-50 text-2xl">Macbook M1 Pro</p>
                            </div>
                            <div className="text-right">
                                <p className="text-base text-zinc-50 text-opacity-60">Specs:</p>
                                <p className="text-base text-zinc-50 text-opacity-60">M1</p>
                                <p className="text-base text-zinc-50 text-opacity-60">8 GB RAM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SetupCard;
