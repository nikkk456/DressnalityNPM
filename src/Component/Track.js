import React, { useState } from 'react'
import Order from './Order';
const Track = () => {
    const [orderId, setOrderId] = useState("");
    const [isloading, setIsloading] = useState(true);
    const [arr, setArr] = useState([])
    const[date, setDate] =useState([])
    const handleClick = () => {
        console.log(orderId);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMzQyMTcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjc3MTY5ODIxLCJleHAiOjE2NzgwMzM4MjEsIm5iZiI6MTY3NzE2OTgyMSwianRpIjoiMWVlcE1oNGtpOEQyZmFvNyJ9.zQQJxFDf3sAYdYVTOydEC159-ioSiViO7ajmFRZLGew");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders,
        };
        const url = `https://apiv2.shiprocket.in/v1/external/courier/track?order_id=${orderId}`
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                arr.push(result)
                setIsloading(false);
                console.log(arr);
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
                            <input type="text" value={orderId} className="form-control" required autoComplete='off' placeholder='Enter Your Order Id' onChange={(e) => {
                                setOrderId(e.target.value);
                            }} style={{ width: "60%", height: "60%" }} />
                            <button type='button' className="btn2" onClick={handleClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isloading?"":<Order arr= {arr} isloading={isloading} date={date[0]} orderId={orderId}/>
            }
            
        </div>
    )
}

export default Track
