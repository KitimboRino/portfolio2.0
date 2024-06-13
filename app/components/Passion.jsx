import Image from 'next/image';

const Passion = () => {
    return (
        <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <div className="text-left mb-4">
                    <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-3">
                        I&apos;ve always had a passion for travel, but I&apos;ve <br />
                        never had the chance to explore it fully. What I <br />
                        do during my free time is take walks and have <br />
                        road trips with friends once in a while
                    </h3>
                    <h2 className="text-zinc-50 text-opacity-60 text-xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">
                        So it&apos;s not like I gave up or anything. Making videos or
                        photos is always a big thing to me. It&apos;s just that I
                        found my new passion that has everything I ever
                        liked in it.
                    </h2>
                </div>
            </div>
        </section >
    );
};

export default Passion;
