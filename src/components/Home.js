import React from 'react'                                    //importing required libraries
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css';                            //importing styles

const Home = () => {                                //creating a Home component

    const contacts = useSelector(state => state);       // holding the entire state object

    const dispatch = useDispatch();                     //integrating redux 

    const deleteContact = (id) => {                             //delete the contact utilizing redux for state management
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    return (
        <div className='home-container'>
            <div className='row'>
                <div className='col-md-11 my-5 text-end'>           {/*medium sized viewport grids nd margin in y-axis*/}
                    <Link to='/add' className='addbtn' rel="none">Add Contact</Link>
                </div>
                <div className='col-md-10 mx-auto'>              {/*medium sized viewport takes 10 grids out of 12 nd injecting table */}
                    <table className='table table-striped table-hover'>
                        <thead className='text-white bg-dark text-center'>
                            <tr>
                                <th scope='col'>S.No</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {                                           /* using map funtion  */
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary me-2'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home;