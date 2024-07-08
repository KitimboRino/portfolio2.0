import React, { useState, useEffect } from 'react';
import { Link } from 'next-view-transitions'
import Image from 'next/image';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when a navigation link is clicked
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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
      className={`self-stretch flex w-full flex-col pt-6 pb-11 px-5 transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-transparent'
        } sticky top-0 z-50`}
      aria-label="Main Navigation"
    >
      <header className="self-center flex w-full max-w-[1400px] flex-col">
        <div className="justify-center items-center self-center flex w-full max-w-[1248px] flex-col rounded-xl">
          <nav
            className={`border border-[color:var(--gray-15,rgba(138,138,138,0.15))] gap-2.5 px-3 py-2 rounded-xl border-solid w-full ${isScrolled ? 'backdrop-blur-sm' : 'bg-transparent'
              }`}
            role="navigation"
          >
            <div className="flex w-full grow shrink-0 basis-auto justify-between gap-5 flex-wrap">
              <Link href="/" className="max-w-full justify-center items-center bg-white self-stretch flex w-[66px] flex-col px-5 py-1 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
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
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[67px] max-w-full flex-col rounded-[3.75rem] hover:scale-105 hover:rounded-[1rem] transition-all duration-300 ease-in-out">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/about" onClick={closeDropdown}>
                      About
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[68px] max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/works" onClick={closeDropdown}>
                      Works
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-14 max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/blog" onClick={closeDropdown}>
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-20 max-w-full flex-col rounded-[3.75rem] hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/contact" onClick={closeDropdown}>
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
              <div className="flex flex-col mt-2 gap-2.5 md:hidden transition ease-in-out duration-300">
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/about" onClick={closeDropdown}>
                      About
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/works" onClick={closeDropdown}>
                      Works
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                  <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--com-nero-10,rgba(255,255,255,0.10))] w-full px-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/blog" onClick={closeDropdown}>
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-full max-w-full flex-col rounded-[3.75rem] transition ease-in-out duration-300">
                  <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[color:var(--your-com-nero-10,rgba(255,255,255,0.10))] w-full pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                    <Link href="/contact" onClick={closeDropdown}>
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
