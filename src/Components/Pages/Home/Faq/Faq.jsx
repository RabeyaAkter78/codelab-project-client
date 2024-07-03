import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Faq = () => {
    return (
        <div className="mb-20">
            <SectionTitle
            heading={"Faq"}
            subHeading={"Frequntly Asked Question"}
            ></SectionTitle>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium"> What are your office hours?</div>
                <div className="collapse-content">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;