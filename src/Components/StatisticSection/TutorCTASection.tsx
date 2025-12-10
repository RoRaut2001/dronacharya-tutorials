import { ThumbsUp, CheckCircle, Heart, GraduationCap } from "lucide-react"; // Replaced Plus with GraduationCap
// Using a high-quality, relevant image URL from Unsplash
const TUTOR_CTA_IMAGE = "src/assets/Images/looking_to_teach.jpeg";

export default function TutorCTASection() {

    // Updated to use Lucide components directly as icons
    const tutorStats = [
        { value: "94%", label: "Tutors Recommended", color: "text-[#35b9a1]", icon: CheckCircle },
        { value: "65%", label: "Repeat Students", color: "text-[#4b38ef]", icon: Heart },
    ];

    return (
        <section className="py-20 px-4 sm:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Outer container for subtle shadow/border effect */}
                <div className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">

                        {/* Content (Left) - Text and Stats */}
                        <div className="lg:w-7/12 p-8 sm:p-12 lg:p-12 text-center lg:text-left z-10">

                            <p className="text-sm font-semibold text-blue-600 mb-2">Tutor Feature</p>

                            <h2 className="text-4xl font-extrabold leading-tight mb-4 text-gray-900">
                                Looking to Teach?
                            </h2>
                            <p className="text-lg opacity-90 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0 text-gray-600">
                                Join Dronacharya and connect with more than **55 Lakh students** on the platform. Create a strong profile and grow your network.
                            </p>

                            {/* Statistics Block (Mirrors image style) */}
                            <div className="flex space-x-12 mb-10 justify-center lg:justify-start">
                                {tutorStats.map((stat, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        {/* Render the Lucide icon component */}
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} strokeWidth={2} />
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-sm text-gray-500">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons Block (Primary button and secondary link) */}
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <button className="bg-[#4b38ef] text-white px-8 py-3 rounded-[5px] font-semibold text-lg hover:bg-[#3f2fac] transition-colors shadow-lg">
                                    Get Started Now
                                </button>
                            </div>
                        </div>

                        {/* Image (Right) - Updated to show full image and corrected icon positions */}
                        <div className="lg:w-5/12 w-full h-[400px] mt-8 lg:mt-0 relative overflow-hidden">

                            {/* Gradient Backgrounds (Simulates the image's floating aesthetic) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-100/70 rounded-3xl lg:rounded-l-none"></div>
                            <div className="absolute w-full h-full transform scale-[0.85] rounded-full bg-white/50 blur-2xl opacity-50 z-0"></div>

                            {/* Image fills the container with object-cover */}
                            <img
                                src={TUTOR_CTA_IMAGE}
                                alt="Happy tutor working online"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl lg:rounded-l-none z-10"
                            />

                            <div className="absolute bottom-3 left-3 p-5 bg-purple-100 rounded-full shadow-md z-20">
                                {/* ThumbsUp icon moved to bottom-left (bottom-5 left-5) */}
                                <ThumbsUp className="w-7 h-7 text-purple-500" strokeWidth={2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}