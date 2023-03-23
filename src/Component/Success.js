import React from 'react'
import { NavLink } from 'react-router-dom'

const Success = () => {
    return (
        <div>
            <div className="py-5 text-center">
                <h1 className="text-primary"><img src="./Image/LOGO4.png" alt="" style={{ width: "25%" }} /></h1>
                <h2>Thanks for Shopping with Us</h2>
                <p className="lead">We have received your order and start working on your dream dress will ping you soon and all updates being shared with your given mail id and phone number till then stay connected</p>
                <NavLink to="/Products"><button className="btn2">Continue Shopping</button></NavLink>
            </div>
        </div>
    )
}

export default Success
