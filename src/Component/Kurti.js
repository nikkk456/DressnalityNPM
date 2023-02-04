import React from 'react'
import { Link } from 'react-router-dom';

const Kurti = () => {
    return (
        <div>
            <img src="./Image/chikan banner.jpg" alt="banner tha yha pr" style={{width: "100%", marginBottom: "2%"}}></img>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-3 col-sm-4 col-6">
                        <Link to="product.html">
                            <div className="card shadow mb-3">
                                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src="./Image/kurti5.png" alt="ek top hai yha pe" style={{width: "38%"}} /></div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">DressNality</h5>
                                    <p className="card-text">Pink chikankaari kurti <br />SIZE XL L M S <br />&#8377; 1000</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Customisable</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                        <Link to="">
                            <div className="card shadow mb-3">
                                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src="./Image/kurti2.jpeg" alt="ek top hai yha pe" style={{width: "50%"}} /></div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">DressNality</h5>
                                    <p className="card-text"> Sea Green Top <br />SIZE XL L M S <br />&#8377; 700</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Customisable</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                        <Link to="">
                            <div className="card shadow mb-3">
                                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src="./Image/kurti2.jpeg" alt="ek top hai yha pe" style={{width: "50%" }}/></div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">DressNality</h5>
                                    <p className="card-text"> Sea Green Top <br />SIZE XL L M S <br />&#8377; 850</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Customisable</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                        <Link to="">
                            <div className="card shadow mb-3">
                                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src="./Image/kurti2.jpeg" alt="ek top hai yha pe" style={{width: "50%"}} /></div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">DressNality</h5>
                                    <p className="card-text"> Sea Green Top <br />SIZE XL L M S <br />&#8377; 670</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Customisable</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Kurti
