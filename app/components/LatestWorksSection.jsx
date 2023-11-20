import React from 'react'
import Image from "next/image";

function LatestWorksSection() {
  return (
    <section className="max-w-[1252px] items-start self-center flex w-full flex-col mt-16 max-md:max-w-full max-md:mt-10">
      <div className="items-start flex w-[330px] max-w-full flex-col self-start">
        <div className="text-neutral-50 text-lg font-light leading-[120%]">Latest Works</div>
        <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-start">Take a look at some projects I have worked on.</div>
      </div>
      <div className="self-stretch mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-end items-start flex grow flex-col flex-1 rounded-md max-md:mt-2.5">
              <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1168478260869565] grow w-full">
                <header className="bg-gradient-to-r from-transparent via-transparent to-black self-stretch relative flex w-full flex-col pl-3 pr-20 pt-80 pb-3 max-md:pr-5 max-md:pt-24">
                  <div className="justify-center items-center flex w-[91px] max-w-full flex-col self-start">
                    <h1 className="text-neutral-50 text-base leading-[110%] self-stretch">Guild Digital</h1>
                    <p className="text-neutral-400 text-sm leading-[110%] self-stretch">Website</p>
                  </div>
                  <Image
                    src="/public/images/GesturesSite.png"
                    alt="Description of the image"
                    width={200}
                    height={200}
                    // layout="responsive"
                  />
                </header>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-end items-start flex grow flex-col flex-1 rounded-md max-md:mt-2.5">
              <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1141304347826086] grow w-full">
                <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0d670db-9036-428a-8fa5-844b49d4b536?apiKey=f742a22b09984b259f2749b8e77545e3&" className="absolute z-[-1] h-full w-full object-cover object-center inset-0" alt="Project Image" />
                <div className="relative bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_86.25%,rgba(0,0,0,0.77)_100%)] self-stretch flex w-full grow flex-col pl-3 pr-5 pt-80 pb-3">
                  <div className="justify-center items-center flex w-[60px] max-w-full flex-col self-start">
                    <div className="text-neutral-50 text-base leading-[110%] self-start">Gesture</div>
                    <div className="text-neutral-400 text-sm leading-[110%] self-start">Website</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-end items-start flex grow flex-col flex-1 rounded-md max-md:mt-2.5">
              <div className="flex-col overflow-hidden self-stretch relative flex aspect-[1.1168478260869565] grow w-full">
                <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b573902-96aa-46e8-adaa-c7ed4f822aa0?apiKey=f742a22b09984b259f2749b8e77545e3&" className="absolute z-[-1] h-full w-full object-cover object-center inset-0" alt="Project Image" />
                <div className="relative text-neutral-400 text-sm leading-[110%] self-stretch bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_86.25%,rgba(0,0,0,0.77)_100%)] w-full grow pl-3 pr-5 pt-80 pb-3">Website</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex w-[127px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
        <div className="text-neutral-50 text-right text-base font-light leading-[120%] border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] self-stretch w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid">More Projects</div>
      </div>
    </section>
  )
}

export default LatestWorksSection