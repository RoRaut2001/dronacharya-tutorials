import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const groupedClassesData = [
    { type: 'header', label: 'SCHOOL TUITION' },
    { type: 'item', value: "LKG", label: "LKG" },
    { type: 'item', value: "UKG", label: "UKG" },

    { type: 'header', label: 'PRE-PRIMARY' },
    { type: 'item', value: "Foundation", label: "Early Childhood - Foundation" },

    { type: 'header', label: 'PRIMARY SCHOOL (1-5)' },
    { type: 'item', value: "1st", label: "1st Grade - Primary" },
    { type: 'item', value: "5th", label: "5th Grade - Primary" },
    { type: 'item', value: "Elementary", label: "Primary Education - Elementary" },

    { type: 'header', label: 'SECONDARY SCHOOL (6-10)' },
    { type: 'item', value: "10th", label: "10th Grade - Secondary" },

    { type: 'header', label: 'SENIOR SECONDARY' },
    { type: 'item', value: "Arts", label: "Senior Secondary - Arts" },
];

const subjectsByClass = {
    'LKG': ['English', 'Maths'],
    'UKG': ['English', 'Maths', 'Drawing'],
    '1st': ['Science', 'Maths', 'Hindi'],
    '5th': ['Social Studies', 'Computer Science'],
    '10th': ['Physics', 'Chemistry', 'Maths', 'History'],
    'Foundation': ['Phonics', 'Basic Numeracy'],
    'Elementary': ['Science', 'EVS', 'Maths'],
    'Arts': ['Marathi', 'English', 'Hindi', 'Sanskrit', 'History'],
};

const getClassLabel = (value) => {
    const item = groupedClassesData.find(d => d.value === value);
    return item ? item.label : "Select Class/Course";
};

export default function BookDemoModal({ isOpen, onClose }) {

    // ✅ Hooks must be at top level (Fixes ESLint error)
    const [selectedClassValue, setSelectedClassValue] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);

    if (!isOpen) return null;

    const subjectsToDisplay = subjectsByClass[selectedClassValue] || [];
    const baseSelectClasses = "w-full appearance-none bg-white text-gray-800 focus:outline-none text-base sm:text-lg cursor-pointer font-medium";

    const handleClassSelection = (value) => {
        setSelectedClassValue(value);
        setSelectedSubject('');
        setIsClassDropdownOpen(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
            <div
                className="bg-white rounded-3xl shadow-2xl max-w-sm w-full relative transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-200 bg-black/30 p-1 rounded-full transition z-30"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="w-full relative">
                    <img
                        src='/looking_to_teach.jpeg'
                        alt="Tutor Teaching"
                        className="w-full h-auto max-h-40 object-cover rounded-t-3xl"
                    />
                </div>

                <div className="p-6 sm:p-10">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                            Book Your Free Demo
                        </h2>
                        <p className="text-gray-600 text-base">
                            Select a class and subject to get started.
                        </p>
                    </div>

                    {/* CLASS SELECT DROPDOWN */}
                    <div className="relative mb-4" onBlur={() => setIsClassDropdownOpen(false)}>
                        <div
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl cursor-pointer"
                            onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                        >
                            <span className="text-gray-800 text-base sm:text-lg font-medium">
                                {getClassLabel(selectedClassValue)}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isClassDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </div>

                        {isClassDropdownOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 shadow-xl rounded-xl max-h-64 overflow-y-auto z-20">
                                {groupedClassesData.map((data, index) => (
                                    <React.Fragment key={index}>
                                        {data.type === 'header' ? (
                                            <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase bg-gray-50 border-t border-gray-100 first:border-t-0">
                                                {data.label}
                                            </div>
                                        ) : (
                                            <div
                                                className={`px-4 py-3 text-gray-900 text-base cursor-pointer hover:bg-blue-50/70 transition-colors ${selectedClassValue === data.value ? 'bg-blue-100 font-semibold' : ''}`}
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    handleClassSelection(data.value);
                                                }}
                                            >
                                                {data.label}
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SUBJECT SELECT */}
                    {selectedClassValue && (
                        <div className="relative mb-8 shadow-sm rounded-xl border border-gray-200">
                            <select
                                className={baseSelectClasses + " p-4"}
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

                    <button
                        className={`flex items-center justify-center w-full text-white px-8 py-4 font-semibold rounded-xl transition-colors
                            ${selectedClassValue && selectedSubject
                            ? 'bg-[#4b38ef] hover:bg-[#3f2fac]'
                            : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={!selectedClassValue || !selectedSubject}
                        onClick={() => {
                            alert(`Demo booked for ${getClassLabel(selectedClassValue)} - ${selectedSubject}`);
                            onClose();
                        }}
                    >
                        Book Free Demo Now
                    </button>

                    <p className="text-xs text-gray-500 mt-3 text-center">
                        We will match you with a tutor based on your selection.
                    </p>
                </div>
            </div>
        </div>
    );
}
