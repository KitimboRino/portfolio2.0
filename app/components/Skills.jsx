import React from 'react';

const mySkills = [
  {
    skill: 'UI/ UX Design',
  },
  {
    skill: 'Research',
  },
  {
    skill: 'Problem Solving',
  },
  {
    skill: 'Debugging',
  },
  {
    skill: 'Software testing',
  },
  {
    skill: 'Collaboration',
  },
  {
    skill: 'Communication',
  },
  {
    skill: 'Presentation',
  },
  {
    skill: 'Version Control Systems',
  },
  {
    skill: 'Web Development',
  },
  {
    skill: 'Continuous Integration/Continuous Deployment (CI/CD)',
  },
  {
    skill: 'Security Best Practices',
  },
  {
    skill: 'Project Management Tools',
  },
];

const SkillsCard = () => {
  return (
    <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
      <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
        <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Skills</h2>
        <h3 className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-3">Things i am confident at</h3>
        <ul className="grid grid-cols-5 gap-4">
          {mySkills.map((skill, index) => (
            <li key={index} className="mt-2">
              <div className="text-sm">{skill.skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsCard;
