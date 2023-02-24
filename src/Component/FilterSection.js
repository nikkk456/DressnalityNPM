import React, { useContext } from 'react'
import { FeatureContext } from '../Context/Featuredcontext';

const FilterSection = () => {
    const { sorting } = useContext(FeatureContext);
    const { filters: { text }, updateFilterValue } = useContext(FeatureContext);
    return (
        <div style={{backgroundColor:"#c16666"}} className="my-3">
        <div className='container text-center'>
            <div className='d-flex' style={{justifyContent:"end", alignItems:"center"}}>
            <div className='mx-4'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name='text' style={{ border: "3px solid rgb(162 63 63)", borderRadius: "20px", padding: "3.6%", margin: "10px" }} onChange={updateFilterValue} value={text} placeholder="Search product here"></input>
                    </form> 
                </div>
                <div className='mx-3'>
                    <form action=''>
                        <label htmlFor='sort' hidden></label>
                        <select id='sort' name='sort' onChange={sorting} style={{ border: "3px solid rgb(162 63 63)", borderRadius: "20px", padding: "3.6%", margin:"8px" }}>
                            <option value="lowest" className='my-1'>Price(lowest)</option>
                            <option value="highest" className='my-1'>Price(Highest)</option>
                            <option value="A-Z" className='my-1'>A-Z</option>
                            <option value="Z-A" className='my-1'>Z-A</option>
                        </select>
                    </form>
                </div>
                
            </div>
        </div>
        </div>

    )
}

export default FilterSection
