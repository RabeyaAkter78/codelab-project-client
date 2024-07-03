
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 ">
            <h1 className="btn btn-outline bg-white hover:bg-white text-black hover:text-black">{heading}</h1>
            <p className="font-bold text-3xl text-black ">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;