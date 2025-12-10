import { Home, Type, Activity } from 'lucide-react'; // Lucide Icons

// Placeholder images (These should be replaced with actual image paths in your project)
const imgTuition = 'src/assets/Images/tuition_placeholder.jpg';
const imgLanguages = 'src/assets/Images/languages_placeholder.jpg';
const imgHobbies = 'src/assets/Images/hobbies_placeholder.jpg';


const categoriesData = [
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
        icon: Type,
    },
    {
        title: "Hobbies",
        subtitle: "Creative and performing arts",
        courses: "7 Courses",
        image: imgHobbies,
        icon: Activity,
    },
];

const CourseCard = ({ category }) => {
    // Determine icon size/color for the floating element
    const IconComponent = category.icon;

    return (
        <div className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">

            {/* Image and Overlay Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Course Count Tag (Top Left) */}
                <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category.courses}
                </span>

                {/* Floating Icon (Top Right) */}
                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-xl border border-gray-100">
                    <IconComponent className="w-5 h-5 text-gray-800" strokeWidth={2} />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-snug">
                    {category.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                    {category.subtitle}
                </p>

                {/* Explore Button (Matches light purple color) */}
                <button className="bg-blue-300/60 text-blue-800 py-3 rounded-lg font-medium hover:bg-blue-300 transition-colors">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default function ExploreCoursesSection() {
    return (
        <section className="py-20 px-4 sm:px-12 bg-gray-50/70">
            <div className="max-w-6xl mx-auto">
                {/* Optional Header (Uncomment if needed for context)
                <div className="mb-16 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
                        Explore Our Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Find the perfect category to start your learning journey.
                    </p>
                </div>
                */}

                {/* Categories Grid (Responsive) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoriesData.map((category, index) => (
                        <CourseCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}