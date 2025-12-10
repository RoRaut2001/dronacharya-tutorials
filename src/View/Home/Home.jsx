// src/pages/Home.jsx
import Navbar from '../../Components/Navbar/Navbar.jsx';
import HeroSection from '../../Components/HeroSection/HeroSection.jsx';
import StatsSection from '../../Components/StatisticSection/StatSection.jsx';
import ServiceSection from '../../Components/StatisticSection/ServiceSection.jsx';
import HowItWorksTutor from "../../Components/StatisticSection/HowItWorksForTutor.jsx";
import TutorCTASection from "../../Components/StatisticSection/TutorCTASection.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ExploreCoursesSection from "../../Components/StatisticSection/ExploreTheCoursesSection.jsx";

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
