import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FeatureContext } from '../Context/Featuredcontext';
import { FormatNumber } from './FormatNUmber'

const Dress = () => {
    const {filter_products} = useContext(FeatureContext);
    return (
        <div>
            <div className='container' >
                <div className='row'>
                    {filter_products.map((animal, i) => (<>
                        {animal[1].category == "Dress" ? <div className="col-md-3 col-sm-4 col-6" key={i}>
                            <NavLink to={`/SingleProduct/${animal[1].title}`} key={i} style={{ width: "10%" }} className="mx-3">
                                <div className="card shadow mb-3 mx-3" style={{ width: "100%" }}>
                                    <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src={animal[1].imageUrl[0]} alt="product" style={{ width: "100%" }} /></div>
                                    <div className="card-body text-success">
                                        <h5 className="card-title">{animal[1].title}</h5>
                                        <h6 className="card-title card-text">{<FormatNumber price={animal[1].price} />}</h6>
                                        <p className="card-text">Item Remaining{animal[1].quantity}</p>
                                    </div>
                                    <div className="card-footer card-text bg-transparent border-success">Customisable</div>
                                </div>
                            </NavLink>
                        </div> : <></>
                        }
                    </>))}
                </div>
            </div>
        </div>
    )
}

export default Dress
