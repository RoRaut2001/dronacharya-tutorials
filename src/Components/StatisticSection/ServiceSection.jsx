import { BookOpen, BellRing, BarChart3 } from "lucide-react";

const servicesData = [
    {
        icon: BookOpen,
        title: "Post Free Requirement",
        description: "Describe your tutoring needs, subject, and budget in a few simple steps. It's fast and completely free.",
        color: "text-teal-500",
    },
    {
        icon: BellRing,
        title: "Instant Responses",
        description: "Receive personalized proposals from qualified tutors within minutes, tailored to your exact requirements.",
        color: "text-indigo-500",
    },
    {
        icon: BarChart3,
        title: "Compare, Hire and Learn",
        description: "Review tutor profiles, compare quotes, chat directly, and start your first lesson to achieve your goals.",
        color: "text-orange-500",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-blue-50/70">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 sm:mb-16 text-center" >
                    <p className="text-lg sm:text-2xl font-bold text-gray-600">How it Works for Student</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Get a Perfect Online Tutor within 30 Minutes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="mb-6 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-blue-50/50">
                                <service.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.color}`} strokeWidth={2}/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}