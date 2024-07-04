import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Testimonial = () => {
    return (
        <div className="mb-20">
            <SectionTitle 
                heading={"Testimonial"}
                subHeading={"What they say about us"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Expertise and Compassion Combined</h2>
                        <p className="my-4">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex gap-2 justify-start items-center">
                           <img src="/Ellipse 10.png" alt="" />
                           <div>
                            <p><span className="font-bold ">Sarah D, </span>IT Professional</p>
                           <div className="flex gap-1 ">
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Life-Saving Care, Life-Changing Experience</h2>
                        <p className="my-4">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex gap-2 justify-start items-center">
                           <img src="/Ellipse 10 (1).png" alt="" />
                           <div>
                            <p><span className="font-bold ">Michael R, </span>Business Executive</p>
                           <div className="flex gap-1 ">
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">A Partner in Health and
                        Wellness</h2>
                        <p className="my-4">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                        <div className="flex gap-2 justify-start items-center">
                           <img src="/Ellipse 10 (5).png" alt="" />
                           <div>
                            <p><span className="font-bold ">David S, </span>Lawyer </p>
                           <div className="flex gap-1 ">
                           <img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" /><img className="h-4 w-4" src="/fi-sr-star.png" alt="" />
                           </div>
                           </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;