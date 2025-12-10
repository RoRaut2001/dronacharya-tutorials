import React from "react";
import { Search, GraduationCap, ThumbsUp } from "lucide-react";

export default function HeroSection(){
    return (
        <section className="relative bg-blue-50/70 pt-10 pb-20 px-4 sm:px-12 flex flex-col lg:flex-row items-center lg:justify-between overflow-hidden">

                     {/* Content Block (Mobile: Below Image) */}
            <div className="max-w-2xl z-20 pr-0 lg:pr-10 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                    Expert Tutoring, Tailored to
                    Your Child's <span className="text-[#FFB300]">Success</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                    One-on-one lessons with qualified tutors — at your home or online. Personalized support for all subjects, all grades.
                </p>
                <div className="flex flex-col sm:flex-row w-full max-w-xl shadow-lg rounded-xl overflow-hidden border border-gray-200 mx-auto lg:mx-0">
                    <div className="flex items-center flex-grow bg-white p-4">
                        <Search className="h-6 w-6 text-gray-400 mr-3" strokeWidth={2}/>
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="flex-grow text-gray-600 focus:outline-none placeholder-gray-400 text-lg"
                        />
                    </div>
                    <button className="flex items-center justify-center bg-[#4b38ef] text-white px-8 py-4 font-semibold text-lg hover:bg-[#3f2fac] transition-colors whitespace-nowrap">                        Book a Free Demo
                    </button>
                </div>

            </div>
            {/* Image Block (Mobile: Top) */}
            <div className="relative w-full h-[350px] lg:w-[550px] lg:h-[550px] flex items-center justify-center z-10 mb-10 lg:mb-0">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-70 filter blur-sm shadow-lg"></div>

                <div className="w-[300px] h-[300px] lg:w-[470px] lg:h-[470px] rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative">
                    <img
                        src='/hero_section_image1.jpg'
                        alt="Expert Tutoring"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Icons */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg">
                    <GraduationCap className="w-6 h-6 text-yellow-500" fill="currentColor" />
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 p-3 bg-white rounded-full shadow-lg">
                    <ThumbsUp className="w-6 h-6 text-blue-500" fill="currentColor" />
                </div>
            </div>

        </section>
    );
}