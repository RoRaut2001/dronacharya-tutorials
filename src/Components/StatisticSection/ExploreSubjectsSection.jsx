import React from 'react';
import { Home, Globe, Activity, Code, Award } from 'lucide-react';

// Images
const imgTuition = '/looking_to_teach.jpeg';
const imgLanguages = '/looking_to_teach.jpeg';
const imgHobbies = '/looking_to_teach.jpeg';
const imgIT = '/looking_to_teach.jpeg';
const imgExam = '/looking_to_teach.jpeg';

const subjectsData = [
    {
        title: "Tuition",
        subtitle: "School and college tuition",
        courses: "11 Courses",
        image: imgTuition,
        icon: Home,
    },
    {
        title: "Languages",
        subtitle: "Learn new languages",
        courses: "7 Courses",
        image: imgLanguages,
        icon: Globe,
    },
    {
        title: "Hobbies",
        subtitle: "Creative and performing arts",
        courses: "7 Courses",
        image: imgHobbies,
        icon: Activity,
    },
    {
        title: "IT Courses",
        subtitle: "Tech skills development",
        courses: "5 Courses",
        image: imgIT,
        icon: Code,
    },
    {
        title: "Exam Coaching",
        subtitle: "Competitive exam preparation",
        courses: "9 Courses",
        image: imgExam,
        icon: Award,
    },
];

// ✅ Card Component
const SubjectCard = ({ subject }) => {
    const IconComponent = subject.icon;

    return (
        <div className="group w-full max-w-sm flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {subject.courses}
        </span>

                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md border border-gray-100">
                    <IconComponent className="w-5 h-5 text-gray-800" strokeWidth={2} />
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {subject.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                    {subject.subtitle}
                </p>

                <button className="bg-blue-300/60 text-blue-800 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-colors">
                    Explore
                </button>
            </div>
        </div>
    );
};

// ✅ Section
export default function ExploreSubjectsSection() {

    // Split data
    const topRow = subjectsData.slice(0, 3);
    const bottomRow = subjectsData.slice(3);

    return (
        <section className="py-20 px-4 sm:px-12 bg-gray-50/70">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Find a Tutor for Anything!
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover expert tutors for all your learning needs
                    </p>
                </div>

                {/* ✅ TOP GRID - 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-10">
                    {topRow.map((subject, index) => (
                        <SubjectCard key={index} subject={subject} />
                    ))}
                </div>

                {/* ✅ BOTTOM GRID - 2 Cards Centered */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                        {bottomRow.map((subject, index) => (
                            <SubjectCard key={index + 3} subject={subject} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
