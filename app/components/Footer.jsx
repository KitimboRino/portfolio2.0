import React from 'react'
import Image from "next/image";


// const handleButtonClick = () => {
//     // Handle button click event here
// };

function Footer() {


    return (
        <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch  bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[81.25rem] items-start self-stretch flex flex-col max-md:max-w-full">
                <div className="items-start flex w-[198px] max-w-full flex-col self-start">
                    <h2 className="text-neutral-50 text-lg font-light leading-[120%] self-stretch">
                        Explore My Gigs
                    </h2>
                    <p className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-stretch">
                        Take a look at some works
                    </p>
                </div>
                <div className="self-stretch mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="justify-center items-start flex flex-col max-md:mt-2.5">
                                <button
                                // onClick={handleButtonClick}
                                >
                                    <Image
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0e05a7c-84b3-47b1-9216-a2c50453636b?apiKey=f742a22b09984b259f2749b8e77545e3"
                                        alt="Framer Template"
                                        className="aspect-[1.12] object-contain object-center w-full overflow-hidden self-stretch"
                                        width={200}
                                        height={200}
                                    />
                                </button>
                                <div className="justify-center items-start self-stretch flex grow flex-col mt-4">
                                    <p className="text-neutral-50 text-base leading-[110%] self-stretch">
                                        Gestures-ug | Company Website | WordPress
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-start flex grow flex-col max-md:mt-2.5">
                                <button
                                // onClick={handleButtonClick}
                                >
                                    <Image
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14e9ea03-10bc-4388-89df-f4a37e537362?apiKey=f742a22b09984b259f2749b8e77545e3"
                                        alt="Framer Template | Cloudly — SaaS Cloud Product"
                                        className="aspect-[1.12] object-contain object-center w-full overflow-hidden self-stretch"
                                        width={200}
                                        height={200}
                                    />
                                </button>
                                <div className="justify-center items-start self-stretch flex grow flex-col mt-4">
                                    <p className="text-neutral-50 text-base leading-[110%] self-stretch">
                                        Gestures-ug | Company Website | WordPress
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-start flex grow flex-col max-md:mt-2.5">
                                <button
                                // onClick={handleButtonClick}
                                >
                                    <Image
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa578891-4ec5-4638-8c69-0d3d741c1781?apiKey=f742a22b09984b259f2749b8e77545e3"
                                        alt="Website Template | Beamify — Crypto SaaS (Framer)"
                                        className="aspect-[1.12] object-contain object-center w-full overflow-hidden self-stretch"
                                        width={200}
                                        height={200}
                                    />
                                </button>
                                <div className="justify-center items-start self-stretch flex grow flex-col mt-4">
                                    <p className="text-neutral-50 text-base leading-[110%] self-stretch">
                                        Gestures-ug | Company Website | WordPress
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center flex w-[62px] max-w-full grow flex-col mt-6 rounded-[3.125rem] self-end">
                    <button
                        // onClick={handleButtonClick}
                        className="text-neutral-50 text-right text-base font-light leading-[120%] self-stretch border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] w-full grow ml-0.5 pr-3 py-2 rounded-[3.125rem] border-solid">
                        More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Footer