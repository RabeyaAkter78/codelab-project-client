
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-10 w-56">
            <h1 className="btn btn-outline bg-white hover:bg-white text-black hover:text-black">{heading}</h1>
            <p className="font-bold text-3xl text-black my-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;