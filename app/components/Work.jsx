import React from 'react';

const workExperiences = [
  {
    organization: 'World Merit Org',
    role: 'Front End Engineer',
    startYear: 2022,
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
    <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
        <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Professional life</h2>
        <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full">Work Experience</h3>
        <ul>
          {workExperiences.map((experience, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{experience.organization}</p>
                </div>
                <div className="text-right">
                  {/* <p className="text-sm"> */}
                    <p className="text-sm">{experience.role}</p>
                  {/* </p> */}
                </div>
                <div className="text-right">
                  <p className="text-sm">
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
