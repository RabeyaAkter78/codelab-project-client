
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 ">
            <h1 className="btn btn-outline btn-sm rounded-3xl bg-white hover:bg-white text-black hover:text-black">{heading}</h1>
            <p className="font-bold text-3xl w-[50%] text-black my-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;