import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faRocket } from '@fortawesome/free-solid-svg-icons';

const Steps = () => {
    const steps = [
        {
            icon: faUser,
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            num: "01",
        },
        {
            icon: faBox,
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            num: "02",
        },
        {
            icon: faRocket,
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            num: "03",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-10 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                        >
                            <div
                                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                style={{ backgroundColor: '#7c3aed' }}
                            >
                                {step.num}
                            </div>                         
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: '#ede9fe', color: '#7c3aed' }}
                            >
                                <FontAwesomeIcon icon={step.icon} />
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;