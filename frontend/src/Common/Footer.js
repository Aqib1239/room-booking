import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row bg-dark text-light justify-content-around sidebarmain">
                    <div className="col-md-4 footercenterline1">
                        
                            <p className="footercontent">Analyze Infotech is a rapidly growing IT software company specialising in software technologies of recent trends such as MERN, Java, .Net, Android, PHP, Web Designing, WordPress, Joomla, and Search Engine Optimization & Social Media Marketing.</p>
                    </div>
                    <div className="col-md-4 footercenterline2">
                        <div className="row">
                            <h2 className="footeraddressheading">Get In Touch</h2>
                            <p className="footeraddress">
                                <i className="fa-solid fa-location-dot footericon"></i> &nbsp; &nbsp;
                                Janpriya Complex, Phase-II Kursi Road,<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tedhi Puliya Lucknow - 226010<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Uttar Pradesh, INDIA</p>
                        </div>
                        <div className="row"><p>
                            <i className="fa-solid fa-square-phone-flip footericon"></i> <span className="footeraddress">
                                &nbsp; (+91)9453193268<br />
                                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;	(+91)9839434821
                            </span>
                        </p>
                        </div>
                        <div className="row"><p>
                            <i className="fa-solid fa-at footericon"></i> <span className="footeraddress">
                                &nbsp; info@analyzeinfotech.in<br />
                                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;	analyzelko@gmail.com
                            </span>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row justify-content-center">
                            <h2 className="footeraddressheading">Social Media</h2>
                            <a href="https://www.facebook.com/analyzelko/" className="btn btn-outline-primary text-light footersocialicon"><i className="fa-brands fa-facebook"></i> Facebook</a><br />
                            <a href="https://api.whatsapp.com/send?phone=+919453193268" className="btn btn-outline-success text-light footersocialicon footersocialicongreen"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
                            <a href="https://twitter.com/analyzeinfotech" className="btn btn-outline-primary text-light footersocialicon"><i className="fa-brands fa-twitter"></i> Twitter</a>
                            <a href="tel:+919453193268" className="btn btn-outline-success text-light footersocialicon footersocialicongreen"><i className="fa-solid fa-phone-volume"></i> Call</a>
                            <a href="https://www.youtube.com/@analyzeinfotech/about" className="btn btn-outline-success text-light footersocialicon footersocialiconred"><i className="fa-brands fa-youtube"></i> YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 

export default Footer;