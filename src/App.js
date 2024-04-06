import { useEffect } from "react";               //importing required methods,styles
import { ToastContainer } from "react-toastify";    //importing toastify framework
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";                       //importing all the reqired Component
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {                                                     //create a  App component                                              
    const dispatch = useDispatch();                                      //integrating redux
    useEffect(() => {
        const fetchData = async () => {                                         //connecting to api nd fetching data
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const transformedData = data.map(contact => ({
                    id: contact.id,
                    name: contact.name,
                    number: contact.phone,
                    email: contact.email
                }));
                dispatch({ type: 'FETCH_CONTACTS', payload: transformedData });     //dispatch an action in redux app
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div className="App">
            <ToastContainer />      
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </div>
    );
}

export default App;             //exporting app component
