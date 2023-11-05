import React from 'react'

function Footer() {
    return (
        <footer className="max-w-[87.5rem] items-center bg-neutral-900 self-stretch flex flex-col mt-4 rounded-3xl max-md:max-w-full">
            <div className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch flex grow flex-col px-5 py-16 rounded-3xl border-solid max-md:max-w-full">
                <div className="max-w-[1252px] items-start self-center flex w-full flex-col max-md:max-w-full">
                    <div className="items-start flex w-[198px] max-w-full flex-col self-start">
                        <div className="text-neutral-50 text-lg font-light leading-[120%]">Explore My Gigs</div>
                        <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%]">Take a look at some works</div>
                    </div>
                    <div className="self-stretch mt-6 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                <div className="justify-center items-start flex flex-col max-md:mt-2.5">
                                    {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23859692-051f-4d44-ae7e-21a938ddc222?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[1.12] object-cover object-center w-full overflow-hidden self-start" alt="Project Image" /> */}
                                    <div className="justify-center items-start flex w-[283px] max-w-full grow flex-col mt-4 self-start">
                                        <div className="text-neutral-50 text-right text-sm font-light leading-[200%]">Framer Template</div>
                                        <div className="text-neutral-50 text-base leading-[110%] self-start">Madiyour | Personal Website | Framer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="justify-center items-start flex grow flex-col max-md:mt-2.5">
                                    {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf25361-df08-421b-9a47-7cfe38aacf5b?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[1.11] object-cover object-center w-full overflow-hidden self-start" alt="Project Image" /> */}
                                    <div className="text-neutral-50 text-base leading-[110%] justify-center items-start w-[316px] max-w-full grow mt-4 pt-7 self-start">Framer Template | Cloudly — SaaS Cloud <br /> Product</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="justify-center items-start flex grow flex-col max-md:mt-2.5">
                                    {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b63885ec-4d30-4f45-99a0-94e2a6b7d38b?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[1.12] object-cover object-center w-full overflow-hidden self-start" alt="Project Image" />
                                    <div className="text-neutral-50 text-base leading-[110%] justify-center items-start w-[335px] max-w-full grow mt-4 pt-7 self-start">Website Template | Beamify — Crypto SaaS <br /> (Framer)</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center flex w-[62px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
                        <div className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid">More</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer