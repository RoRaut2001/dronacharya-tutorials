import { BookOpen, BellRing, BarChart3 } from "lucide-react"; // Changed ChartArea to BarChart3 (or could use ChartArea/AreaChart if preferred)

// Note: The previous placeholder SVGs (IconDesign, IconCoding, IconMobile) are removed as they are no longer needed.

const servicesData = [
    {
        icon: BookOpen,
        title: "Post Free Requirement",
        description: "Describe your tutoring needs, subject, and budget in a few simple steps. It's fast and completely free.",
        color: "text-teal-500", // Custom color for this icon
    },
    {
        icon: BellRing,
        title: "Instant Responses",
        description: "Receive personalized proposals from qualified tutors within minutes, tailored to your exact requirements.",
        color: "text-indigo-500", // Custom color for this icon
    },
    {
        icon: BarChart3,
        title: "Compare, Hire and Learn",
        description: "Review tutor profiles, compare quotes, chat directly, and start your first lesson to achieve your goals.",
        color: "text-orange-500", // Custom color for this icon
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-12 bg-blue-50/70">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center" >
                    <p className=" text-2xl font-bold text-md ">How it Works for Student</p>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Get a Perfect Online Tutor within 30 Minutes</h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            {/* Icon Container: The icon's color is applied dynamically from the servicesData */}
                            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-blue-50/50">
                                <service.icon className={`w-8 h-8 ${service.color}`} strokeWidth={2}/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}