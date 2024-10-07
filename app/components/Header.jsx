import React, { useState, useEffect } from 'react';
import { Link } from 'next-view-transitions'; // Adjust import if necessary
import Image from 'next/image';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the mobile dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when a link is clicked
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Detect if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`self-stretch flex w-full flex-col pt-6 pb-11 px-5 transition-all duration-300 ${
        isScrolled ? 'bg-transparent' : 'bg-transparent'
      } sticky top-0 z-50`}
      aria-label="Main Navigation"
    >
      <header className="self-center flex w-full max-w-[1400px] flex-col">
        <div className="justify-center items-center self-center flex w-full max-w-[1248px] flex-col rounded-xl">
          <nav
            className={`border border-[rgba(138,138,138,0.15)] gap-2.5 px-3 py-2 rounded-xl border-solid w-full ${
              isScrolled ? 'backdrop-blur-sm' : 'bg-transparent'
            }`}
            role="navigation"
          >
            <div className="flex w-full grow shrink-0 basis-auto justify-between gap-5 flex-wrap">
              {/* Logo */}
              <Link
                href="/"
                className="max-w-full justify-center items-center bg-white self-stretch flex w-[66px] flex-col px-5 py-1 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Image
                  loading="lazy"
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>

              {/* Desktop Navigation Links */}
              <div className="flex justify-center items-center gap-2.5 my-auto hidden md:flex group">
                {/* About Link */}
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[67px] max-w-full flex-col rounded-[3.75rem] hover:scale-105 hover:rounded-[1rem] transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/about">
                      About
                    </Link>
                  </div>
                </div>
                {/* Works Link */}
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[68px] max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/works">
                      Works
                    </Link>
                  </div>
                </div>
                {/* Blog Link */}
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-14 max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/blog">
                      Blog
                    </Link>
                  </div>
                </div>
                {/* Contact Link */}
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-20 max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100">
                  <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden justify-center items-center">
                <button
                  className="text-white"
                  aria-label="Toggle menu"
                  onClick={toggleDropdown}
                >
                  &#9776; {/* Hamburger icon */}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
              className={`flex flex-col mt-2 gap-2.5 md:hidden transition-[height] ease-in-out duration-500 overflow-hidden ${
                isDropdownOpen ? 'h-auto' : 'h-0'
              }`}
            >
              {/* About Link */}
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                <div className="text-white text-2xl leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                  <Link href="/about" onClick={closeDropdown}>
                    About
                  </Link>
                </div>
              </div>
              {/* Works Link */}
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                <div className="text-white text-2xl leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                  <Link href="/works" onClick={closeDropdown}>
                    Works
                  </Link>
                </div>
              </div>
              {/* Blog Link */}
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                <div className="text-white text-2xl leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                  <Link href="/blog" onClick={closeDropdown}>
                    Blog
                  </Link>
                </div>
              </div>
              {/* Contact Link */}
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                <div className="text-neutral-50 text-2xl leading-[120%] self-stretch border border-[rgba(255,255,255,0.10)] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                  <Link href="/contact" onClick={closeDropdown}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
}

export default Header;
