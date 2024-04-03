import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { sz } from "../../assets/index";

const SignUp = () => {
    const [createnewData, setCreateNewData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        address: '',
        city: '',
        state: '',
        pin: '',
        date_of_birth: '',
        pan_number: ''
    });

    const [errors, setErrors] = useState({
        password: '',
        date_of_birth: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        let errorMessage = '';

        if (name === 'phone_number') {
        updatedValue = value.replace(/\D/g, '').slice(0, 10);
        if (updatedValue.length !== 10) {
            errorMessage = 'Phone number should contain exactly 10 digits';
        }
    }
        // Validation for email (must contain '@' and end with '.com')
        if (name === 'email') {
            const atIndex = value.indexOf('@');
            const dotIndex = value.lastIndexOf('.');
            if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex || dotIndex === value.length - 1 || atIndex !== value.lastIndexOf('@')) {
                errorMessage = 'Invalid email format.';
            }
        }
        

        // Validation for PAN card (must have 5 characters followed by 4 digits)
        if (name === 'pan_number') {
        if (value.length > 9) {
            errorMessage = 'PAN number should be exactly 9 characters long';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value)) {
            errorMessage = 'Invalid PAN format. like ABCDE1234F';
        }
        updatedValue = value.toUpperCase(); // Convert to uppercase
    }


        // Validation for password (minimum length of 8 characters)
        if (name === 'password') {
            if (value.length < 8) {
                errorMessage = 'Password should be at least 8 characters long';
            }
        }

        // Validation for DOB
        if (name === 'date_of_birth') {
            const dob = new Date(value);
            const currentDate = new Date();
            if (dob >= currentDate) {
                errorMessage = 'invalid date of birth';
            }
        }

        setCreateNewData({ ...createnewData, [name]: updatedValue });
        setErrors({ ...errors, [name]: errorMessage });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/signup', createnewData);
            alert('Form data submitted successfully');
            setCreateNewData({
                name: '',
                email: '',
                password: '',
                phone_number: '',
                address: '',
                city: '',
                state: '',
                pin: '',
                date_of_birth: '',
                pan_number: ''
            });
        } catch (error) {
            alert('Failed to submit form');
        }
    }

    return (
        <div className='mainDivSignUp'>
            <div className='componentDiv'>
                <div className='ImageContainer'>
                    <div>
                        <Link to="/">
                            <img src={sz} width={80} height={80} alt="Smart Zindagi" />
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='praContainer'>
                        <p> Create a new Account </p>
                    </div>
                    <div className='inputDiv'>
                        <div className='signInput'>
                            <label> Name :</label>
                            <input type="text" id="name" placeholder="Enter Your Name" value={createnewData.name} name="name" onChange={handleChange} />
                        </div>
                        <div className='signInput'>
                            <label> Email :</label>
                            <input type="email" id="email" placeholder="Enter Your Email" value={createnewData.email} name="email" onChange={handleChange} />
                            {errors.email && <span className="error">{errors.email}</span>}

                        </div>
                        <div className='signInput'>
                            <label> Password :</label>
                            <input type="password" id="password" placeholder="Enter Your Password" value={createnewData.password} name="password" onChange={handleChange} />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className='signInput'>
                            <label> Contact No :</label>
                            <input type="text" id="phone" placeholder="Enter Your Contact Number" value={createnewData.phone_number} name="phone_number" onChange={handleChange} />
                            {errors.phone_number && <span className="error">{errors.phone_number}</span>}
                        </div>
                        <div className='signInput'>
                            <label> Address:</label>
                            <input type="text" id="address" placeholder="Enter Your Address" value={createnewData.address} name="address" onChange={handleChange} />
                             
                        </div>
                        <div className='signInput'>
                            <label> City :</label>
                            <input type="text" id="city" placeholder="Enter Your City" value={createnewData.city} name="city" onChange={handleChange} />
                        </div>
                        <div className='signInput'>
                            <label> State :</label>
                            <input type="text" id="state" placeholder="Enter Your State" value={createnewData.state} name="state" onChange={handleChange} />
                        </div>
                        <div className='signInput'>
                            <label> Pincode:</label>
                            <input type="text" id="pin" placeholder="Enter Your Pin" value={createnewData.pin} name="pin" onChange={handleChange} />
                            {errors.pin && <span className="error">{errors.pin}</span>}
                        </div>
                        <div className='signInput'>
                            <label> DOB :</label>
                            <input type="date" id="date-of-birth" placeholder="Enter Your Date of Birth" value={createnewData.date_of_birth} name="date_of_birth" onChange={handleChange} />
                            {errors.date_of_birth && <span className="error">{errors.date_of_birth}</span>}
                        </div>
                        <div className='signInput'>
                            <label> PanCard No :</label>
                            <input type="text" id="pan-number" placeholder="Enter Your Pancard Number" value={createnewData.pan_number} name="pan_number" onChange={handleChange} />
                            {errors.pan_number && <span className="error">{errors.pan_number}</span>}

                        </div>
                        <button type="submit" id="button"> Create New Account </button>
                    </div>
                    <div className='redirectionLink'>
                        <h6 className="hyperlink">Already have an account? <Link to="/components/login/Login"> Login here</Link></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
