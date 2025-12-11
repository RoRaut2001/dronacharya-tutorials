import { ThumbsUp, CheckCircle, Heart } from "lucide-react";

export default function TutorCTASection() {

    const tutorStats = [
        { value: "94%", label: "Tutors Recommended", color: "text-[#35b9a1]", icon: CheckCircle },
        { value: "65%", label: "Repeat Students", color: "text-[#4b38ef]", icon: Heart },
    ];

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <div className="lg:w-7/12 p-6 sm:p-8 lg:p-12 text-center lg:text-left z-10">

                            <p className="text-sm font-semibold text-blue-600 mb-2">Tutor Feature</p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-gray-900">
                                Looking to Teach?
                            </h2>
                            <p className="text-base sm:text-lg opacity-90 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0 text-gray-600">
                                Join Dronacharya and connect with more than **55 Lakh students** on the platform. Create a strong profile and grow your network.
                            </p>

                            <div className="flex space-x-8 sm:space-x-12 mb-8 sm:mb-10 justify-center lg:justify-start">
                                {tutorStats.map((stat, index) => (
                                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                                        <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} strokeWidth={2} />
                                        <div>
                                            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center lg:justify-start space-x-4">
                                <button className="bg-[#4b38ef] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-[5px] font-semibold text-base sm:text-lg hover:bg-[#3f2fac] transition-colors shadow-lg">
                                    Get Started Now
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-5/12 w-full h-[300px] sm:h-[400px] mt-0 relative overflow-hidden">

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-100/70 rounded-2xl lg:rounded-l-none"></div>
                            <div className="absolute w-full h-full transform scale-[0.85] rounded-full bg-white/50 blur-2xl opacity-50 z-0"></div>

                            <img
                                src= '/looking_to_teach.jpeg'
                                alt="Happy tutor working online"
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-l-none z-10"
                            />

                            <div className="absolute bottom-3 left-3 p-3 sm:p-5 bg-purple-100 rounded-full shadow-md z-20">
                                <ThumbsUp className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" strokeWidth={2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}