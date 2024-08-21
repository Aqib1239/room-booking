import Header from "../Common/Header";
import Footer from "../Common/Footer";
import './Home.css'

const Home = () =>{
    return(
        <div>
            <Header />
            <div className="row m-auto home-base">
                <div className="col-2"></div>
                <div className="col-4 home-content">
                    Welcome <br /> To <br /> Room Booking
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;