import React from 'react';

const achievements = [
    { title: 'Refactory Catalyst', date: 'Aug 23, 2022', type: 'Course' },
    { title: 'Introduction to building CHT Applications', date: 'Dec, 2023', type: 'Certificate' },
    { title: 'Start the UX Design Process: Empathize, Define, and Ideate', date: 'Nov, 2023', type: 'Certificate' },
    { title: 'Andela React Learning Program', date: 'Oct 09, 2023', type: 'Course' },
    { title: 'Coding Interview Preparation', date: 'Sep, 2023', type: 'Certificate' },
    { title: 'Meta Front-End Developer Specialization', date: 'Sep, 2023', type: 'Course' },
    { title: 'Front-End Developer Capstone', date: 'Aug, 2023', type: 'Certificate' },
    { title: 'Principles of UX/UI Design', date: 'Jul, 2023', type: 'Certificate' },
    { title: 'Advanced React', date: 'May, 2023', type: 'Certificate' },
    { title: 'React Basics', date: 'Apr, 2023', type: 'Certificate' },
    { title: 'HTML and CSS in depth', date: 'May, 2023', type: 'Certificate' },
    { title: 'Version Control', date: 'Mar, 2023', type: 'Certificate' },
    { title: 'JavaScript Algoriths and Data Structures', date: 'Feb, 2023', type: 'Certificate' },
    { title: 'Programming with JavaScript', date: 'Feb, 2023', type: 'Certificate' },
    { title: 'Introduction to Front-End Development', date: 'Jan, 2022', type: 'Certificate' },
    { title: 'Foundations of User Experience (UX) Design', date: 'Dec, 2022', type: 'Certificate' },
    { title: 'Software Testing Bootcamp', date: 'Apr, 2022', type: 'Course' },
    { title: 'Data Structures and Algorithms', date: 'Mar, 2022', type: 'Course' },
    { title: 'Learning React Native', date: 'April, 2021', type: 'Certificate' },
    { title: "ELA254: AIChE's Engineering Leadership Development", date: 'April, 2021', type: 'Certificate' },
    { title: "Bachelor of Science in Chemical Engineering", date: 'Dec, 2018', type: 'Bachelors' },
];

const AchievementCard = () => {
    return (
        <section className="border border-[color:var(--mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
                <h2 className="text-zinc-50 text-opacity-60 text-2xl font-light leading-[120%] self-stretch mt-1 max-md:max-w-full mt-1">Achievements</h2>
                <p className="text-neutral-50 text-3xl font-light leading-[110%] tracking-tighter self-stretch max-md:max-w-full mb-2">Every degree, certificate, course I ever gathered</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 ">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div>
                                <p className="text-neutral-50 text-xl">{achievement.title}</p>
                                <p className="text-sm text-zinc-50 text-opacity-60">{achievement.date}</p>
                            </div>
                            <div className="text-right">
                                <p className="bg-gray-700 px-3 py-1 rounded-full text-sm text-zinc-50 text-opacity-60">{achievement.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementCard;
