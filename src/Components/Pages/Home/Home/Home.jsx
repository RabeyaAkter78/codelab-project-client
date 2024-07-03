import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;