// src/pages/Home.jsx
import Navbar from '../../Components/Navbar/Navbar.jsx';
import HeroSection from '../../Components/HeroSection/HeroSection.jsx';
import StatsSection from '../../Components/StatisticSection/StatSection.jsx';
import ServiceSection from '../../Components/StatisticSection/ServiceSection.jsx';
import HowItWorksTutor from "../../Components/StatisticSection/HowItWorksForTutor.js";
import TutorCTASection from "../../Components/StatisticSection/TutorCTASection.js";
import Footer from "../../Components/Footer/Footer.js";
import ExploreCoursesSection from "../../Components/StatisticSection/ExploreTheCoursesSection.js";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <StatsSection />
            <ServiceSection/>
            {/*<ExploreCoursesSection/>*/}
            <HowItWorksTutor/>
            <TutorCTASection/>
            <Footer/>
        </div>
    );
};
