import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#020043] text-white items-center p-20">
                <aside>
                    <img className="my-5" src="/DOC.png" alt="" />
                    <p className="mb-5" >123 Main Street Anytown, USA
                        <br />Postal Code: 12345
                    </p>
                    <p className="mb-5"> Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)</p>
                </aside>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Success Page </a>
                    <a className="link link-hover">Terms and condition</a>
                </nav>
                <nav>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
              
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 ">
                        <FaFacebook className="h-8 w-8" />
                        <FaInstagram className="h-8 w-8"></FaInstagram>
                        <FaLinkedin className="h-8 w-8"></FaLinkedin>
                        <FaYoutube className="h-8 w-8"></FaYoutube>
                    </div>
                    <p>@docplus 2024</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;