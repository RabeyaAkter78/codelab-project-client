
const SubBanner = () => {
    return (
        <div className="w-full mb-20">
            <p className="text-5xl font-bold text-center  mb-8">Comprehensive Care <br /> for Every Patient</p>
            {/* middle section cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center md:justify-between items-end">
                {/* card1 */}
                <div className="card bg-base-100 border border-neutral-200 shadow-xl rounded-4xl h-full flex flex-col justify-end">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-4xl">90%</h2>
                        <p>Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <figure className="px-6 pb-6">
                        <img
                            src="/public/Group 12.png"
                            alt="Pie chart"
                            className="rounded-xl"
                        />
                    </figure>
                </div>
                {/* card2 */}
                <div className="bg-base-100 border border-neutral-200 shadow-xl rounded-xl p-10 h-full md:h-[75%] flex flex-col justify-end">
                    <div>
                        <h2 className="card-title font-bold text-4xl">500+</h2>
                        <p className="font-semibold my-2">Board-certified <br />doctors</p>
                    </div>
                    <figure className="mt-auto">
                        <img
                            src="/contract.png"
                            alt="contract"
                            className="-mt-4 pb-5 pl-24"
                        />
                    </figure>
                </div>
                {/* Card 3 */}
                <div className="bg-base-100 border border-neutral-200 shadow-xl rounded-xl p-10 h-full md:h-[50%] flex flex-col justify-end">
                    <div>
                        <h2 className="card-title font-bold text-4xl">4.8
                            <img src="/fi-sr-star.png" alt="" />
                        </h2>
                        <p className="font-semibold my-2">Over 20,000 Patient</p>
                    </div>
                    <figure className="mt-auto">
                        <img
                            src="/Group 7.png"
                            alt="Pie chart"
                            className="pb-5"
                        />
                    </figure>
                </div>
                {/* card 4 */}
                <div className="bg-base-100 border border-neutral-200 shadow-xl rounded-xl p-10 h-full md:h-[75%] flex flex-col justify-end">
                    <div>
                        <h2 className="card-title font-bold text-4xl">$5000+</h2>
                        <p className="font-semibold my-2">Money spent for poor patients</p>
                    </div>
                    <figure className="mt-auto">
                        <img
                            src="/Group.png"
                            alt="Pie chart"
                            className="-mt-4 pb-5 pl-24"
                        />
                    </figure>
                </div>
                {/* card 5 */}
                <div className="card bg-base-100 border border-neutral-200 shadow-xl rounded-4xl h-full flex flex-col justify-end">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-4xl">50+</h2>
                        <p>Free lesson videos for patients</p>
                    </div>
                    <figure className="px-6 pb-6">
                        <img
                            src="/3.png"
                            alt="Pie chart"
                            className="rounded-xl"
                        />
                    </figure>
                </div>
            </div>
        </div>

    );
};

export default SubBanner;