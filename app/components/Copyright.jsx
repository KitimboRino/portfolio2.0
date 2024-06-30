import React from 'react'

function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="items-center self-center flex w-[137px] max-w-full flex-col mt-20 max-md:mt-10">
            <div className="text-neutral-50 text-base font-light leading-[120%]">KRED Inc © {currentYear}</div>
            <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%]">Curated by RINO</div>
        </footer>
    )
}

export default Copyright