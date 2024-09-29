import React from 'react';
import {education} from '@/constants/index'

const EducationCard = () => {
    return (
        <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Education</h2>
                <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-3">Where and what i studied</h3>
                <ul>
                    {education.map((education, index) => (
                        <li key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6">
                                <div className="col-span-6 text-left">
                                    <p className="text-neutral-50 text-sm">
                                        {education.startYear} — {education.endYear}
                                    </p>
                                </div>
                                <div className="col-span-4 text-left">
                                    <p className="text-neutral-50 text-sm">{education.course}</p>
                                </div>
                                <div className="col-span-2 text-left">
                                    <p className="text-neutral-50 text-sm">{education.institution}</p>
                                </div>
                            </div>
                            <br />
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    );
};

export default EducationCard;
