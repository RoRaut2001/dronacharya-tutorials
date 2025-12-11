const tutorStepsData = [
    {
        number: 1,
        title: "Create Account",
        description: "Sign up quickly as a tutor and join our network of experts.",
        bgColor: "#35B9A1",
    },
    {
        number: 2,
        title: "Complete Profile",
        description: "Fill out your preferences, qualifications, subjects, and availability.",
        bgColor: "#6655EE",
    },
    {
        number: 3,
        title: "Choose Plan",
        description: "Pick a subscription or commission plan that fits your professional goals.",
        bgColor: "#2E3A60",
    },
    {
        number: 4,
        title: "Connect",
        description: "Start connecting with students, accepting bookings, and growing your income.",
        bgColor: "#35B9A1",
    },
];

export default function HowItWorksTutor() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 sm:mb-16 text-center">
                    <p className="text-lg sm:text-2xl font-bold text-gray-600">How It Works For Tutor</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                        Getting started with Dronacharya is simple and straightforward.
                    </h2>
                </div>
                {/* Steps Grid (Responsive):
                number of columns to show the card view responsive--
                    - grid-cols-1: Mobile (1 column)
                    - sm:grid-cols-2: Tablet (2 columns)
                    - lg:grid-cols-4: Desktop (4 columns)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tutorStepsData.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">

                            <div
                                className="mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-xl sm:text-2xl text-white shadow-lg transition-colors duration-300"
                                style={{ backgroundColor: step.bgColor }}
                            >
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}