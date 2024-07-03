
const SubBanner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4  mb-20">
            {/* Right */}
            <div className="w-full md:w-2/12">
                <div className="card bg-base-100 border h-full w-full border-neutral-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-4xl ">90%</h2>
                        <p className="font-semibold my-2">Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <figure className="px-10 ">
                        <img
                            src="/Group 12.png"
                            alt="Pie chart"
                            className="rounded-xl pb-5" />
                    </figure>
                </div>
            </div>
            {/* middle */}
            <div className="w-full md:w-8/12">
                <p className="text-5xl font-bold text-center mb-4">Comprehensive Care <br /> for Every Patient </p>
                {/* middle section cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-2">
                    {/* card1 */}
                <div className="bg-base-100 border border-neutral-200 h-60 shadow-xl rounded-xl p-10">
                    <div >
                        <h2 className="card-title font-bold text-4xl ">500+</h2>
                        <p className="font-semibold my-2">Board-certified <br />doctors</p>
                    </div>
                    <figure>
                        <img
                            src="/contract.png"
                            alt="contract"
                            className="-mt-4 pb-5 pl-24 " />
                    </figure>
                </div>
                {/* Card 2 */}
                <div className=" bg-base-100 border border-neutral-200 h-52 shadow-xl rounded-xl p-10 mt-8">
                    <div >
                        <h2 className="card-title font-bold text-4xl ">4.8 
                            <img src="/fi-sr-star.png" alt="" />
                        </h2>
                        <p className="font-semibold my-2">Over 20,000 Patient</p>
                    </div>
                    <figure >
                        <img
                            src="/Group 7.png"
                            alt="Pie chart"
                            className=" pb-5" />
                    </figure>
                </div>
                {/* card 3 */}
                <div className="bg-base-100 border border-neutral-200 h-60 shadow-xl rounded-xl p-10">
                    <div>
                        <h2 className="card-title font-bold text-4xl ">$5000+</h2>
                        <p className="font-semibold my-2">Money spend
                        for poor patient</p>
                    </div>
                    <figure>
                        <img
                            src="/Group.png"
                            alt="Pie chart"
                            className="-mt-4 pb-5 pl-24" />
                    </figure>
                </div>
                </div>
            </div>
            {/* left */}
            <div className="w-full md:w-2/12">
            <div className="card bg-base-100 border border-neutral-200 shadow-xl h-full w-full">
                    <div  className="card-body">
                        <h2 className="card-title font-bold text-4xl ">50+</h2>
                        <p >Free lession video 
                        for patient </p>
                    </div>
                    <figure className="px-10 ">
                        <img
                            src="/3.png"
                            alt="Pie chart"
                            className="rounded-xl pb-5" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;