import { MdArrowOutward } from "react-icons/md";


const Appointment = () => {
    return (
        <div>

            <div className="carousel-item relative w-full mb-20">
                <img src="/Group 43.png" className="w-full" />

                <div className="absolute top-0 right-10 mt-16">
                    <img src="/DOC.png" alt="DOC+ Logo" />
                </div>
                <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white font-bold lg:space-y-7 lg:w-1/2 lg:pl-12'>
                        <h2 className='text-xl md:text-4xl text-white font-bold'>
                            Get Your
                            First Appointment
                            at 50%
                        </h2>

                        <div className="flex gap-4">
                           
                                <a className="btn btn-warning hover:btn-warning text-white hover:text-white">Appointment <MdArrowOutward /></a>
                           
                           
                                <a className="btn btn-outline bg-none hover:bg-none text-white">Learn More<MdArrowOutward /></a>
                           

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Appointment;