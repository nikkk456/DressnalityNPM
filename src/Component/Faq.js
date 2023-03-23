import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
    return (
        <div>
            <div className='container'>
                <div className='row my-3'>We are here for you! Here are some faq's our customer asked</div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: "#83a0c1" }}>
                                <strong style={{ color: "black" }}>How long does shipping take? When will i get my order?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                The shipping will take usually 1-2 days and you will receive your order withing 7 buisness days of order. <br />
                                But in case you ordered Customised dress it may take some extra days as we start working on your dream dress from starting but we will try it to deliver within 7 days as well.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: "#83a0c1" }}>
                                <strong style={{ color: "black" }}>My order has been dispatched, can i track it?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Ofcourse you can track your order once it get shipped we will deliver your order by shiprocket and once it gets shipped we will inform you by SMS and with the tracking url as well.
                                Or you can track your order on our website in track your order section as well.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: "#83a0c1" }}>
                                <strong style={{ color: "black" }}>Do you offer a guarantee? Can i return my order?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We are sure that you will love all the dresses which is designed for you with all the loves but still if you get disappointed by your order you can still return it to us without any damage with the products withing 7 days only.
                                <strong>Customised Products will not be returned for the obvious reasons</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: "#83a0c1" }}>
                                <strong style={{ color: "black" }}>What methods of payment do you take?</strong>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We have all modes of payment for you, you can pay with your credit, deit cards or can use UPI as well. all the payments are safe with us and we never use any information of the users regarding card details etc.
                                <strong>You can use Cash on delivery as well</strong>
                            </div>
                        </div>
                    </div>
                    <div className='row my-3 text-center'>Still having some question in your mind then please<Link to='/Contact' style={{ width: "10%" }}>Contact us</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Faq
