import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";
import SubBanner from "../SubBanner/SubBanner";
import Testimonial from "../Testiominal/Testimonial";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <WhoWeAre></WhoWeAre>
            <Services></Services>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;