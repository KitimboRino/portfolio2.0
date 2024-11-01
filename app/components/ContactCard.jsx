import React from 'react';
import Image from 'next/image';
import { Link } from "next-view-transitions";
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

function ContactCard() {
  return (
    <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
        <h2 className="text-3xl text-neutral-50 mb-4">Ways to Reach out to me</h2>
        <p className="text-neutral-50 text-2xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          Well if you need to contact me about a project feel free, I do take those.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="mb-4 text-neutral-50 text-base">
            Feel free to reach out to me through any of these platforms. I&apos;m always open to making new connections and assisting anyone who might have questions or concerns about my work or anything related to my blog. Whether you need advice, troubleshooting help, or just want to chat, I&apos;m here to lend a helping hand.
          </p>
          <p className="mb-4 text-neutral-50 text-base">
            Additionally, if you&apos;re interested in the topics I cover on my blog and have questions or suggestions for future content, I&apos;d love to hear from you. Your feedback and input are incredibly valuable to me, and I&apos;m always striving to create content that resonates with my audience.
          </p>
        </div>

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
    </section>
  );
};

export default ContactCard;
