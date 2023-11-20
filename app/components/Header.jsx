import React from 'react'
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <nav
      className="self-stretch flex w-full flex-col pt-6 pb-11 px-5 max-md:max-w-full"
      aria-label="Main Navigation"
    >
      <header className="self-center flex w-full max-w-[1400px] flex-col max-md:max-w-full">
        <div className="justify-center items-center self-center flex w-full max-w-[1248px] flex-col rounded-xl max-md:max-w-full">
          <nav
            className="border border-[color:var(--madiyour-com-gray-15,rgba(138,138,138,0.15))] self-stretch flex items-start justify-between gap-2.5 px-3 py-2 rounded-xl border-solid max-md:max-w-full max-md:flex-wrap"
            role="navigation"
          >
            <div className="items-start self-stretch flex w-[913px] max-w-full grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap">
              <div className="max-w-full justify-center items-center bg-zinc-400 bg-opacity-10 self-stretch flex w-[66px] flex-col px-5 py-1 rounded-xl">
                <BsSearch className="text-white" />
              </div>
            </div>
            <div className="justify-center items-start self-center flex grow shrink-0 basis-auto gap-2.5 my-auto">
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[67px] max-w-full flex-col rounded-[3.75rem]">
                <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                  <a href="#">About</a>
                </div>
              </div>
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-[68px] max-w-full flex-col rounded-[3.75rem]">
                <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                  <a href="#">Works</a>
                </div>
              </div>
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-14 max-w-full flex-col rounded-[3.75rem]">
                <div className="text-white text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow px-3 py-1 rounded-[3.75rem] border-solid">
                  <a href="#">Blog</a>
                </div>
              </div>
              <div className="justify-center items-center bg-neutral-900 bg-opacity-10 self-stretch flex w-20 max-w-full flex-col rounded-[3.75rem]">
                <div className="text-neutral-50 text-base leading-[120%] self-stretch border border-[color:var(--madiyour-com-nero-10,rgba(255,255,255,0.10))] w-full grow pl-3 pr-3 py-1 rounded-[3.75rem] border-solid">
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  )
}

export default Header