
import Adminheader from "../Common/Adminheader";
import './Adminhome.css';

const Adminhome = () =>{
    return(
        <div>
            <Adminheader />
            <div className="row m-auto justify-content-center adminhome-base">
                <div className="col-9 adminhome-main">
                    Welcome <br />To <br/>Adminstration
                </div>
            </div>
        </div>
    );
}


export default Adminhome;