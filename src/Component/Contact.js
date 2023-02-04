import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h2 className='text-center my-3'>Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.111130325484!2d77.02057631409095!3d28.446066199248676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d58b997e5f%3A0xd6517be7362d1ed7!2sToppers%20squad!5e0!3m2!1sen!2sin!4v1675267116999!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className=' container col-md-8 col-md-offset-2' style={{width: "80%"}}>
            <form action='https://formspree.io/f/xwkjvake' method='POST'>
                <div className="form-group my-2">
                    <label htmlFor="title">Name 
                    <span className="require">*</span></label>
                    <input type="text" className="form-control" name="Name" required autoComplete='off' />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="title">Enter Your Email 
                    <span className="require">*</span></label>
                    <input type="email" className="form-control" name="Email" required autoComplete='off' />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="title">Enter Your Query
                    <span className="require">*</span></label>
                    <textarea type="text" cols="30" rows="8" className="form-control" name="Query" required autoComplete='off' />
                </div>
                <button type="submit" className=" btn2">Submit</button>
            </form>
            </div>

        </div>
    )
}

export default Contact
