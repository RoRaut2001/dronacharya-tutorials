import React from "react";
import { Search, GraduationCap, ThumbsUp } from "lucide-react"; // Imported Lucide icons

export default function HeroSection(){
    return (
        <section className="relative bg-blue-50/70 pt-1  px-12 flex items-center justify-between overflow-hidden">
            {/*<div className="absolute top-0 right-0 w-3/5 h-full bg-blue-50/70 "></div>*/}

            {/* Content Left */}
            <div className="max-w-2xl z-20 pr-10">
                <h1 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                    Expert Tutoring, Tailored to
                    Your Child's <span className="text-[#FFB300]">Success</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                    One-on-one lessons with qualified tutors — at your home or online. Personalized support for all subjects, all grades.
                </p>
                {/* --- START OF REPLACED SECTION --- */}
                <div className="flex w-full max-w-xl shadow-lg rounded-xl overflow-hidden border border-gray-200">
                    {/* Search Input Field */}
                    <div className="flex items-center flex-grow bg-white p-4">
                        {/* Lucide Search Icon */}
                        <Search className="h-6 w-6 text-gray-400 mr-3" strokeWidth={2}/>
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="flex-grow text-gray-600 focus:outline-none placeholder-gray-400 text-lg"
                        />
                    </div>
                    {/* Attached Book demo Button */}
                    <button className="flex items-center justify-center bg-[#4b38ef] text-white px-8 py-4 font-semibold text-lg hover:bg-[#3f2fac] transition-colors whitespace-nowrap">                        Book a Free Demo
                    </button>
                </div>
            </div>

            {/* Image Right (Placeholder for the large image and floating elements) */}
            <div className="relative w-[550px] h-[550px] flex items-center justify-center z-10">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-70 filter blur-sm shadow-lg"></div>
                {/*<div className="absolute top-10 right-10 w-6 h-6 bg-orange-400 rounded-full opacity-70 filter blur-sm shadow-lg"></div>*/}
                {/*<div className="absolute bottom-10 left-10 w-10 h-10 bg-blue-400 rounded-full opacity-70 filter blur-sm shadow-lg"></div>*/}

                <div className="w-[470px] h-[470px]  rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative">
                    <img
                        src="../../../public/assets/Images/hero_section_image1.jpg"
                        alt="Business Solutions"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Simulated Floating Icons (Top-right: GraduationCap, bottom-left: ThumbsUp) */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg">
                    {/* Replaced with Lucide GraduationCap and colored yellow */}
                    <GraduationCap className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 p-3 bg-white rounded-full shadow-lg">
                    {/* Replaced with Lucide ThumbsUp and colored blue */}
                    <ThumbsUp className="w-6 h-6 text-blue-500" />
                </div>
            </div>
        </section>
    );
}