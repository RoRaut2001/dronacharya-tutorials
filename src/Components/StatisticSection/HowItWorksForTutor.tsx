const tutorStepsData = [
    {
        number: 1,
        title: "Create Account",
        description: "Sign up quickly as a tutor and join our network of experts.",
        bgColor: "#35B9A1", // Teal/Green
    },
    {
        number: 2,
        title: "Complete Profile",
        description: "Fill out your preferences, qualifications, subjects, and availability.",
        bgColor: "#6655EE", // Vibrant Purple
    },
    {
        number: 3,
        title: "Choose Plan",
        description: "Pick a subscription or commission plan that fits your professional goals.",
        bgColor: "#2E3A60", // Dark Indigo/Blue
    },
    {
        number: 4,
        title: "Connect",
        description: "Start connecting with students, accepting bookings, and growing your income.",
        bgColor: "#35B9A1", // Teal/Green (same as 1)
    },
];

export default function HowItWorksTutor() {
    return (
        <section className="py-20 px-4 sm:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <p className="text-2xl font-bold text-md ">How It Works For Tutor</p>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
                        Getting started with Dronacharya is simple and straightforward.
                    </h2>
                </div>

                {/* Steps Grid (Responsive) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tutorStepsData.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">

                            {/* Step Number Circle (Custom color via inline style) */}
                            <div
                                className="mb-6 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-2xl text-white shadow-lg transition-colors duration-300"
                                style={{ backgroundColor: step.bgColor }} // Apply custom hex color
                            >
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}