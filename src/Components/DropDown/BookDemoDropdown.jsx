import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const mockClasses = ['LKG', '1st', '5th', '10th', 'Senior Secondary - Arts'];
const mockSubjects = {
    // Mock data based on the images provided
    'LKG': ['English', 'Maths'],
    '1st': ['Science', 'Maths', 'Hindi'],
    '10th': ['Physics', 'Chemistry', 'Biology', 'Maths', 'History'],
    'Senior Secondary - Arts': ['Marathi', 'English', 'Hindi', 'Sanskrit', 'History'],
};

export default function BookDemoDropdown() {
    // Initial state set to an empty string so the placeholder is visible.
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    // Determine subjects to display based on the selected class
    const subjectsToDisplay = mockSubjects[selectedClass] || [];

    const baseSelectClasses = "w-full appearance-none bg-white text-gray-800 focus:outline-none text-base sm:text-lg cursor-pointer font-medium";

    return (
        /* Outer container styled to match the Hero Section's input field aesthetic */
        <div className="flex flex-col sm:flex-row w-full max-w-xl shadow-xl rounded-xl overflow-hidden border border-gray-200 mx-auto lg:mx-0">

            {/* Sequential Dropdown Container (Takes all remaining horizontal space on sm+) */}
            {/* On mobile, this remains flex-col and stacks the visible dropdowns */}
            <div className={`flex flex-col w-full sm:flex-row sm:flex-grow`}>

                {/* Class/Course Dropdown */}
                {/* flex-grow ensures it takes 100% width when alone, and 50% when SubjectDropdown appears on sm+ */}
                <div className={`relative bg-white p-4 border-b border-gray-200 sm:flex-grow sm:border-r sm:border-b-0`}>

                    <select
                        className={baseSelectClasses}
                        value={selectedClass}
                        onChange={(e) => {
                            setSelectedClass(e.target.value);
                            setSelectedSubject(''); // Reset subject when class changes
                        }}
                    >
                        <option value="" disabled>Select Class/Course</option>
                        {mockClasses.map((grade) => (
                            <option key={grade} value={grade} className="text-gray-900">{grade}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Subject Dropdown (Conditional Rendering) */}
                {/* Only appears if a class is selected. Uses flex-grow to share space equally on sm+ */}
                {selectedClass && (
                    <div className={`relative bg-white p-4 border-b border-gray-200 sm:flex-grow sm:border-r sm:border-b-0`}>
                        <select
                            className={baseSelectClasses}
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                        >
                            <option value="" disabled>Select Subject</option>
                            {subjectsToDisplay.map((subject) => (
                                <option key={subject} value={subject} className="text-gray-900">{subject}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                )}
            </div>

            {/* Book Demo Button (Takes full width on mobile, aligns horizontally on sm+) */}
            <button className="flex items-center justify-center bg-[#4b38ef] text-white px-8 py-4 font-semibold
                text-base sm:text-lg hover:bg-[#3f2fac] transition-colors whitespace-nowrap
                w-full sm:w-auto">
                Book a Free Demo
            </button>
        </div>
    );
}