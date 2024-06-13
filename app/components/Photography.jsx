import Image from 'next/image';

const PhotoCard = () => {
    return (
        <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <div className="text-center mb-4">
                    <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Photography</h2>
                    <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-3">I take photos sometimes, with my Samsung galaxy s22 ultra</h3>
                </div>
                <div className="relative w-full h-64 md:h-96 mb-4">
                    <Image
                        src="/images/flowe.jpg"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </div>
                <div className="text-center">
                    <button className="bg-red-500 text-neutral-50 w-3/4 md:w-1/2 px-4 py-2 rounded-md hover:bg-red-600">
                        Works
                    </button>
                </div>
            </div>
        </section >
    );
};

export default PhotoCard;
