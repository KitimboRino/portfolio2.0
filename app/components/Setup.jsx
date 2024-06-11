import React from 'react';

const stackItems = [
    { name: 'JavaScript', icon: 'JSIcon' },
    { name: 'C', icon: 'CIcon' },
    { name: 'HTML', icon: 'HTMLIcon' },
    { name: 'Python', icon: 'PythonIcon' },
    { name: 'Figma', icon: 'FigmaIcon' },
    { name: 'Framer', icon: 'FramerIcon' },
];

const SetupCard = () => {
    return (
        <section className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch bg-neutral-900 flex grow flex-col px-20 py-16 mt-4 rounded-3xl border-solid max-md:max-w-full max-md:px-5">
            <div className="max-w-[1258px] self-center flex w-full flex-col pr-1.5 max-md:max-w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Setup Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Setup</h3>
                        <p className="text-sm mb-4">I spend here most of my time</p>
                        <img src="setup_image_url" alt="Setup" className="rounded-lg" />
                    </div>

                    {/* Stack Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Stack</h3>
                        <p className="text-sm mb-4">Things I use all the time</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {stackItems.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-2 bg-gray-700 rounded-lg">
                                    <div className="bg-gray-600 p-2 rounded-full mb-2">
                                        {/* Replace with actual icon */}
                                        <span className="text-lg">{item.icon}</span>
                                    </div>
                                    <p className="text-xs">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Screen Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Screen</h3>
                        <p className="text-sm">Samsung 28 inch monitor</p>
                    </div>

                    {/* Keyboard Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Keyboard</h3>
                        <p className="text-sm">logitech mx keys</p>
                    </div>

                    {/* Laptop Section */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">

                            <div>
                                <h3 className="text-xl font-semibold">Laptop</h3>
                                <p className="text-sm">Macbook M1 Pro</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs">Specs:</p>
                                <p className="text-xs">M1</p>
                                <p className="text-xs">16 GB RAM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SetupCard;
