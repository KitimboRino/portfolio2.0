import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { BsSearch } from 'react-icons/bs';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="self-stretch flex w-full flex-col pt-6 pb-11 px-5"
      aria-label="Main Navigation"
    >
      <header className="self-center flex w-full max-w-[1400px] flex-col">
        <div className="justify-center items-center self-center flex w-full max-w-[1248px] flex-col rounded-xl">
          <nav
            className="border border-[color:var(--madiyour-com-gray-15,rgba(138,138,138,0.15))] gap-2.5 px-3 py-2 rounded-xl border-solid w-full"
            role="navigation"
          >
            <div className="flex w-full grow shrink-0 basis-auto justify-between gap-5 flex-wrap">
              <Link href="/" className="max-w-full justify-center items-center bg-white self-stretch flex w-[66px] flex-col px-5 py-1 rounded-xl">
                <Image
                  loading="lazy"
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
              {/* Use md:flex to show on medium and larger screens, hidden on small screens */}
              <div className="flex justify-center items-center gap-2.5 my-auto hidden md:flex">
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[67px] max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/about">
                      About
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[68px] max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/works">
                      Works
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-14 max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/blog">
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-20 max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              {/* Mobile menu (visible on small screens) */}
              <div className="flex md:hidden justify-center items-center">
                <button 
                  className="text-white" 
                  aria-label="Toggle menu"
                  onClick={toggleDropdown}
                >
                  {/* Add a hamburger icon here, using a library like react-icons or your own SVG */}
                  &#9776;
                </button>
              </div>
            </div>
            {/* Dropdown menu for mobile */}
            {isDropdownOpen && (
              <div className="flex flex-col mt-2 gap-2.5 md:hidden">
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/about">
                      About
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/works">
                      Works
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/blog">
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem]">
                  <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </nav>
  );
}

export default Header;
