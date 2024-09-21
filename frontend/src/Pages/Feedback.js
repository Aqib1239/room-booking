import './Feedback.css';
import Userheader from '../Common/Userheader';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Feedback = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [feedback, setFeedback] = useState("");

    let submitfeedback = async () => {
        let result = await fetch(`https://room-booking-api-umber.vercel.app/feedback`, {
            method: 'post',
            body: JSON.stringify({ name, email, contact, feedback }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result) {
            alert("Feedback Submitted Successfull");
            navigate('/userhome');
        } else {
            alert("Something went wrong...");
        }
    }

    return (
        <div>
            <Userheader />
            <div className='row m-auto feedback-base'>
                <div className='col-md-1'></div>
                <div className='col-md-5 feedback-main'>
                    <u><h2>Feedback</h2></u>
                    <form onSubmit={ submitfeedback }>
                        <input type="text" placeholder='Enter your name'
                            onChange={(e) => setName(e.target.value)} value={name} required />
                        <input type="email" placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)} value={email} required />
                        <input type="number" placeholder='Enter your Contact Number'
                            onChange={(e) => setContact(e.target.value)} value={contact} required />
                        <input type="text" placeholder='Enter your Feedback'
                            onChange={(e) => setFeedback(e.target.value)} value={feedback} required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
