import { MdArrowOutward } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const WhoWeAre = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  ">
            <div className="w-[470px] h-[355px] ">
                <SectionTitle
                    heading={"Who We Are"}
                    subHeading={"We Help To Get Soultions"}
                ></SectionTitle>
                <p className="p-2 md:p-0">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve. </p>
                <button className="btn btn-warning btn-sm my-10">Learn More <MdArrowOutward /></button>
            </div>
            <div className="mb-20">
                <img src="/Rectangle 24.png" alt="doctor image" />
                <div className="card p-5 bg-[#343268] text-white rounded-2xl w-96 md:-mt-40 md:-ml-20">
                    <h3 className="font-semibold text-2xl my-4">Our mission is simple</h3>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>

        </div>
    );
};

export default WhoWeAre;