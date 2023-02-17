import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FeatureContext, useFeatureContext } from '../Context/Featuredcontext';
import { FormatNumber } from './FormatNUmber'

const All = () => {
    const { filter_products } = useContext(FeatureContext);
    console.log(filter_products);

    return (
        <>
        <div>
            <form action=''>
                <label htmlFor='sort'></label>
                <select id='sort' name='sort'>
                    <option value="lowest">Price(lowest)</option>
                    <option value="#" disabled></option>
                    <option value="highest">Price(Highest)</option>
                    <option value="#" disabled></option>
                    <option value="lowest">A-Z</option>
                    <option value="#" disabled></option>
                    <option value="lowest">Z-A</option>
                </select>
            </form>
        </div>
        <div className='container' >
            <div className='row'>

                {filter_products.map((animal, i) => (<>
                    <div className="col-md-3 col-sm-4 col-6">
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
                    </div>

                </>))}
            </div>
        </div>
        </>
    )
}

export default All
