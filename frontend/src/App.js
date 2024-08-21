import Home from "./Pages/Home";
import {Route, Routes} from 'react-router-dom';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Userhome from "./Pages/Userhome";
import Feedback from "./Pages/Feedback";
import Adminlogin from "./Pages/Adminlogin";
import Adminhome from "./Pages/Adminhome";
import Viewfeedback from "./Pages/Viewfeedback";
import Addroom from "./Pages/Addroom";
import Viewroom from "./Pages/Viewroom";
import Editroom from "./Pages/Editroom";
import Users from "./Pages/Users";
import Rooms from "./Pages/Rooms";
import Booknow from "./Pages/Booknow";
import Mybooking from "./Pages/Mybooking";
import Viewbooking from "./Pages/Viewbooking";
import Editbooking from "./Pages/Editbooking";
import PrivateRoute from "./Pages/PrivateRoute";
import PrivateRoute2 from "./Pages/PrivateRoute2";

const App = () =>{
    return (
        <div>
            <Routes>

                <Route element={ <PrivateRoute /> }>
                    <Route path="/userhome" element={ <Userhome /> } />
                    <Route path="/rooms" element={ <Rooms /> } />
                    <Route path="/mybooking" element={ <Mybooking /> } />
                    <Route path="/feedback" element={ <Feedback /> } />
                    <Route path="/booknow/:id" element={ <Booknow /> } />
                </Route>
                <Route element={ <PrivateRoute2 /> }>
                    <Route path="/adminhome" element={ <Adminhome /> } />
                    <Route path="/users" element={ <Users /> } />
                    <Route path="/addroom" element={ <Addroom /> } />
                    <Route path="/viewroom" element={ <Viewroom /> } />
                    <Route path="/editroom/:id" element={ <Editroom /> } />
                    <Route path="/viewbooking" element={ <Viewbooking /> } />
                    <Route path="/viewfeedback" element={ <Viewfeedback /> } />
                    <Route path="/editbooking/:id" element={ <Editbooking /> } />
                </Route>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <Signup /> } />
                <Route path="/adminlogin" element={ <Adminlogin /> } />
            </Routes>
        </div>
    );
}


export default App;