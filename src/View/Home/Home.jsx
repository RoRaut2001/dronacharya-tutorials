import Navbar from '../../Components/Navbar/Navbar.jsx';
import HeroSection from '../../Components/HeroSection/HeroSection.jsx';
import StatsSection from '../../Components/StatisticSection/StatSection.jsx';
import ServiceSection from '../../Components/StatisticSection/ServiceSection.jsx';
import HowItWorksTutor from "../../Components/StatisticSection/HowItWorksForTutor.jsx";
import TutorCTASection from "../../Components/StatisticSection/TutorCTASection.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ExploreSubjectsSection from "../../Components/StatisticSection/ExploreSubjectsSection.jsx";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <StatsSection />
            <ServiceSection/>
            <ExploreSubjectsSection/>
            <HowItWorksTutor/>
            <TutorCTASection/>
            <Footer/>
        </div>
    );
};
