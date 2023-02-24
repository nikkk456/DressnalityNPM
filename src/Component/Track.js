import React, { useState } from 'react'
import Order from './Order';
import { BiRadioCircleMarked } from "react-icons/bi";
const Track = () => {
    const [orderId, setOrderId] = useState("");
    const [isloading, setIsloading] = useState(true);
    const [arr, setArr] = useState([])
    const[date, setDate] =useState([])
    const handleClick = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMzQyMTcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjc3MTY5ODIxLCJleHAiOjE2NzgwMzM4MjEsIm5iZiI6MTY3NzE2OTgyMSwianRpIjoiMWVlcE1oNGtpOEQyZmFvNyJ9.zQQJxFDf3sAYdYVTOydEC159-ioSiViO7ajmFRZLGew");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders,
        };
        const url = `https://apiv2.shiprocket.in/v1/external/courier/track?order_id=113919`
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                arr.push(result)
                setIsloading(false);
                arr[0].map((currElem)=>{
                    date.push(currElem.tracking_data.etd.split(" "))
                })
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <div className='container'>
                <img src='./Image/order_search_banner_1.png' style={{ width: "100%" }}></img>
                <div className='container my-3' style={{ borderRadius: "20px", boxShadow: "4px 5px 7px grey" }}>
                    <div className='row'>
                        <span className="title my-2"><strong>Track the Shipment the way you want </strong></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 my-3'>
                            <span>
                                <label>Seach By:</label>
                            </span>
                            <input className='mx-2' type="radio" name='track_product' value="OrderId" />
                            <span><strong>Order ID</strong></span>
                            <input className='mx-2' type="radio" name='track_product' value="AWB" />
                            <span ><strong>AWB</strong></span>
                        </div>
                        <div className='col-md-6 d-flex' style={{ justifyContent: "center", alignItems: "center" }}>
                            <input type="text" className="form-control" required autoComplete='off' placeholder='Enter Your Order Id' onChange={(e) => {
                                setOrderId(e.target.value);
                            }} style={{ width: "60%", height: "60%" }} />
                            <button type='button' className="btn2" onClick={handleClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isloading ? "" :
                    <div className='container' >
                        <div className='row'>
                            <div className='col-md-4 col-6' style={{ borderRadius: "20px", backgroundColor: "#78aeea" }}>
                                <h6 style={{ marginTop: "5%" }}>Order Id: 113919</h6>
                                <h6 style={{ marginTop: "5%" }}>Estimate Deliver on:</h6>
                                <h4>
                                    {
                                        date[1].map((currElem,i)=>{
                                            return<>
                                            <h4>{currElem}</h4>
                                            </>
                                        })
                                    }
                                    {arr[0].map((currElem) => {
                                    return <>
                                        <h6>Status:</h6>
                                        <span>{currElem.tracking_data.shipment_track[0].current_status}</span>

                                    </>
                                })}
                                </h4>
                            </div>
                            <div className='col-md-7 col-12 mx-4' style={{borderRadius: "20px", backgroundColor: "whitesmoke" }}>
                                <div className='row'>
                                    {
                                        arr[0].map((currElem) => {
                                            return <>
                                                <div className= "my-2" style={{ display: "flex", justifyContent: "space-between", alignItems:"center"}}><h5 style={{marginBottom:"0%"}}>{currElem.tracking_data.shipment_track[0].courier_name}</h5>
                                                    <span><h6 style={{marginBottom:"0%"}}>AWB Code:{currElem.tracking_data.shipment_track[0].awb_code}</h6></span>
                                                </div>
                                                <hr />
                                                <div className='container' style={{overflow:"auto", overflowY:"auto", height:"160px"}} >
                                                    {
                                                        currElem.tracking_data.shipment_track_activities.map((animal, i) => {
                                                            return <>
                                                                <div className='row'>
                                                                    <div className='col-md-4' style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                                                                        {animal.date}
                                                                        <BiRadioCircleMarked/>
                                                                    </div>
                                                                    <div className='col-md-7 mx-1 my-1'>
                                                                        <div className='row'>
                                                                            <b style={{width:"21%"}}>Activity:</b>{animal.activity.toLowerCase()}
                                                                        </div>
                                                                        <div className='row'>
                                                                        <b style={{width:"22%"}}>Location:</b>{animal.location.toLowerCase()}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        })
                                                    }
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <h4>How was your experience with Us</h4>
                            <div className='col-md-7 d-flex' style={{ justifyContent: "center" }}>
                                <input className='mx-2' type="radio" name='Experience' value="Very Poor" />
                                <span><strong>Very Poor</strong></span>
                                <input className='mx-2' type="radio" name='Experience' value="Normal" />
                                <span ><strong>Normal</strong></span>
                                <input className='mx-2' type="radio" name='Experience' value="Excellent" />
                                <span ><strong>Excellent</strong></span>

                            </div>
                            <div className='col-md-5 d-flex' style={{ justifyContent: "flex-end" }}>
                                <button type='button' className="btn2 mx-3" onClick={handleClick}>Submit</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Track
