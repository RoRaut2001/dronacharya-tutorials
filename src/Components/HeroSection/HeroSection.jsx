import React, { useState } from "react";
import { Search, GraduationCap, ThumbsUp } from "lucide-react";
import BookDemoModal from '../DropDown/BookDemoModel.jsx';

export default function HeroSection(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative bg-blue-50/70
            pt-5 pb-10 px-4 sm:px-6 lg:px-12
            flex flex-col-reverse lg:flex-row items-center lg:justify-between overflow-hidden">

            <div className="w-full lg:w-1/2 z-20 pr-0 lg:pr-10 text-center lg:text-left mt-10 lg:mt-0">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                    Expert Tutoring, Tailored to
                    Your Child's <span className="text-[#FFB300]">Success</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-10">
                    One-on-one lessons with qualified tutors — at your home or online. Personalized support for all subjects, all grades.
                </p>

                <div className="flex flex-col sm:flex-row w-full max-w-xl shadow-lg rounded-xl overflow-hidden border border-gray-200 mx-auto lg:mx-0">

                    <div className="flex items-center flex-grow bg-white p-4">
                        <Search className="h-6 w-6 text-gray-400 mr-3" strokeWidth={2}/>
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="flex-grow text-gray-600 focus:outline-none placeholder-gray-400 text-base sm:text-lg cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                            readOnly
                        />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center bg-[#4b38ef] text-white px-8 py-4 font-semibold
                        text-base sm:text-lg hover:bg-[#3f2fac] transition-colors whitespace-nowrap
                        w-full sm:w-auto">
                        Book a Free Demo
                    </button>
                </div>
            </div>

            <div className="relative w-full h-[300px] sm:h-[400px] lg:w-1/2 lg:h-[550px] flex items-center justify-center z-10 lg:mb-0">
                <div className="absolute top-1/4 left-1/9 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-70 filter blur-sm shadow-lg"></div>

                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden flex items-center justify-center shadow-2xl relative">
                    <img
                        src='/hero_section_image1.jpg'
                        alt="Expert Tutoring"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow-lg">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                </div>

                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow-lg">
                    <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
            </div>

            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}