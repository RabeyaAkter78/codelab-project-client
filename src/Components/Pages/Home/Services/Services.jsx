import { MdArrowOutward } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Services = () => {
    return (
        <div className="flex flex-col gap-10 bg-base-100 p-10 justify-center items-center rounded-2xl mb-20">
         
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
                <div className="w-full md:w-[470px] h-auto md:h-[355px]">
                    <SectionTitle
                        heading={"Services"}
                        subHeading={"Empowering Health, Enriching Lives"}
                    ></SectionTitle>
                    <p className="p-2 md:p-0">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className="btn btn-warning btn-sm mt-10 md:mt-4">Appointment <MdArrowOutward /></button>
                </div>
                <div className="w-full md:w-[470px] h-auto md:h-[355px]">
                    <img src="/Rectangle 27.png" alt="doctor image" />
                    <div className="card p-5 bg-[#343268] opacity-80 rounded-3xl w-80 h-44 -mt-48 md:-mt-48 ml-8 md:ml-6">
                        <h3 className="font-semibold text-2xl mb-2 pr-8 text-white">Advanced Technology</h3>
                        <p className="mb-4 text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        <button className="btn btn-warning rounded-full ml-60 -mt-8 h-10 w-12 p-0"><MdArrowOutward className="text-white" /></button>
                    </div>
                </div>
            </div>
   
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
                <div className="w-full md:w-[470px] h-auto md:h-[355px]">
                    <img src="/Rectangle 27 (1).png" alt="doctor image" />
                    <div className="card p-5 bg-[#343268] opacity-80 rounded-3xl w-80 h-44 -mt-48 md:-mt-48 ml-8 md:ml-6">
                        <h3 className="font-semibold text-2xl mb-2 pr-8 text-white">Online Doctor Meet</h3>
                        <p className="mb-4 text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        <button className="btn btn-warning rounded-full ml-60 -mt-8 h-10 w-12 p-0"><MdArrowOutward className="text-white" /></button>
                    </div>
                </div>
                <div className="w-full md:w-[470px] h-auto md:h-[355px]">
                    <img src="/Rectangle 27 (2).png" alt="doctor image" />
                    <div className="card p-5 bg-[#343268] opacity-80 rounded-3xl w-80 h-44 -mt-48 md:-mt-48 ml-8 md:ml-6">
                        <h3 className="font-semibold text-2xl mb-2 text-white">Consultancy your health</h3>
                        <p className="mb-4 text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        <button className="btn btn-warning rounded-full ml-60 -mt-8 h-10 w-12 p-0"><MdArrowOutward className="text-white" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;