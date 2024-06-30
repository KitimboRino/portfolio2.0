import React, { useState } from 'react';
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

const ContactForm = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <div className="flex flex-row justify-between bg-gray-800 text-white p-6 rounded-md w-full">
                    <div>
                        <div className="mb-4">
                            <p className="text-neutral-50 text-lg font-light ">Got a project in mind?</p>
                            <p className="text-zinc-50 text-opacity-60 text-base">Reach out and let&apos;s make it happen!</p>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="youremail@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-300 text-black p-2 rounded-md flex-1 mr-4 text-zinc-50 text-opacity-60 text-base"
                            />
                            <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                                <a
                                    href={`mailto:${email}`}
                                    className="text-white p-1 rounded-md flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform duration-300 ease-in-out justify-center items-center flex flex-col my-auto rounded-xl"
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
        </section>
    );
};

export default ContactForm;
