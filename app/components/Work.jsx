import React from 'react';

const workExperiences = [
  {
    organization: 'World Merit Org',
    role: 'Front End Engineer',
    startYear: 2022,
    endYear: 'Present',
  },
  {
    organization: 'Sentinel Digital Technologies',
    role: 'Software Engineer',
    startYear: 2023,
    endYear: 'Present',
  },
  {
    organization: 'Guild Digital',
    role: 'Software Engineer',
    startYear: 2022,
    endYear: 2023,
  },
  {
    organization: 'Project Code Ug',
    role: 'Full Stack Engineer',
    startYear: 2021,
    endYear: 2022,
  },
  {
    organization: 'Refactory Uganda',
    role: 'Peer Mentor',
    startYear: 2020,
    endYear: 'Present',
  },
];

const WorkExperienceCard = () => {
  return (
    <section className="border border-[color:var(--com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
        <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Professional life</h2>
        <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-3">Work Experience</h3>
        <ul>
          {workExperiences.map((experience, index) => (
            <li key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6">
                <div className="col-span-6 text-left">
                  <p className="text-neutral-50 font-semibold">{experience.organization}</p>
                </div>
                <div className="col-span-4 text-left">
                  <p className="text-neutral-50 text-sm">{experience.role}</p>
                </div>
                <div className="col-span-2 text-left">
                  <p className="text-neutral-50 text-sm">
                    {experience.startYear} — {experience.endYear}
                  </p>
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

export default WorkExperienceCard;
