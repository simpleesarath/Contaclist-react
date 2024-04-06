import React, { useState } from 'react'                             // importing useState
import { useDispatch, useSelector } from 'react-redux'; // import useDispatch
import { useNavigate } from 'react-router-dom';         // import useNavigate component
import { toast } from 'react-toastify';                    // import toastify framework  
import '../App.css'                                         // import styles from app.css

const AddContact = () => {                  //creating addcontact component

    const [name, setName] = useState('');       //setting the state intinally empty
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);       // holding the entire state object


    const dispatch = useDispatch();           //integrating redux using dispatch
    const navigate = useNavigate();            //react router to navigate

    const handelSubmit = e => {         
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if (!email || !number || !name) {            //checking that empty inputs doesnt fils requirements
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {               //to check that email is doesn't contain in contact 
            return toast.error("This email already Exists!");
        }

        if (checkNumber) {              //to check that number is doesn't contain in contact  
            return toast.error("This number already Exists!");
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!!")
        navigate('/');
    };

    return (
        <div className='add-contact-container'>
            <h1 className='display-5 text-center fw-bold'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form className='text-center' onSubmit={handelSubmit}>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='email' placeholder='Email' className='form-control'
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Phone Number' className='form-control'
                                value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group-add mb-3'>
                            <input type='submit' value='Add Contact' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact; //exporting addcontact component