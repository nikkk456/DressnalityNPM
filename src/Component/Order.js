import React, { useState } from 'react'
import { BiRadioCircleMarked } from "react-icons/bi";
import { BsFillEmojiNeutralFill, BsFillEmojiHeartEyesFill, BsFillEmojiFrownFill } from "react-icons/bs";

const Order = ({ arr, isloading, date, orderId }) => {
  const [feedback, setFeedback] = useState("");
  const [style1, setStyle1] = useState("border-m");
  const [style2, setStyle2] = useState("border-m");
  const [style3, setStyle3] = useState("border-m");
  return (
    <div>
      {
        isloading ? "" :
          <div className='container' >
            <div className='row'>
              <div className='col-md-4 col-6' style={{ borderRadius: "20px", backgroundColor: "#78aeea" }}>
                <h6 style={{ marginTop: "5%", color: "aliceblue" }}>Order Id: {orderId}</h6>
                <h6 style={{ marginTop: "5%", color: "navy" }}>Estimate Deliver on:</h6>
                <h4>
                  <h4 style={{ color: "honeydew" }}>{date[0]}</h4>
                  <h4 style={{ color: "honeydew" }}>{date[1]}</h4>
                  {arr[0].map((currElem) => {
                    return <>
                      <h6 style={{ color: "navy" }}>Status:</h6>
                      <span style={{ color: "forestgreen" }}>{currElem.tracking_data.shipment_track[0].current_status}</span>

                    </>
                  })}
                </h4>
              </div>
              <div className='col-md-7 col-12 mx-4' style={{ borderRadius: "20px", backgroundColor: "whitesmoke" }}>
                <div className='row'>
                  {
                    arr[0].map((currElem) => {
                      return <>
                        <div className="my-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h5 style={{ marginBottom: "0%", color: "darkblue" }}>{currElem.tracking_data.shipment_track[0].courier_name}</h5>
                          <span><h6 style={{ marginBottom: "0%", color: "brown" }}>AWB Code:{currElem.tracking_data.shipment_track[0].awb_code}</h6></span>
                        </div>
                        <hr />
                        <div className='container' style={{ overflow: "auto", overflowY: "auto", height: "160px" }} >
                          {
                            currElem.tracking_data.shipment_track_activities.map((animal, i) => {
                              return <>
                                <div className='row'>
                                  <div className='col-md-4' style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    {animal.date}
                                    <BiRadioCircleMarked />
                                  </div>
                                  <div className='col-md-7 mx-1 my-1'>
                                    <div className='row'>
                                      <b style={{ width: "21%" }}>Activity:</b>{animal.activity.toLowerCase()}
                                    </div>
                                    <div className='row'>
                                      <b style={{ width: "22%" }}>Location:</b>{animal.location.toLowerCase()}
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
            <div className='row my-5'>
              <h4>How was your experience with Us</h4>
              <div className='col-md-7 d-flex'>
                <div className='mx-3 d-flex' style={{ justifyContent: "center", alignItems: "center", width: "20%" }} onClick={() => {
                  setFeedback("Sad")
                  setStyle1("border-n");
                }}>
                  <BsFillEmojiFrownFill style={{ color: "yellow", backgroundColor:"black" }} className={style1} size={56} />
                </div>
                <div className='mx-3 d-flex' style={{ justifyContent: "center", alignItems: "center", width: "20%" }} onClick={(e) => {
                  setFeedback("Neutral")
                  setStyle2("border-n");
                }}>
                  <BsFillEmojiNeutralFill style={{ color: "yellow", backgroundColor:"black" }} className={style2} size={56} />
                </div>
                <div className='mx-3 d-flex' style={{ justifyContent: "center", alignItems: "center", width: "20%" }} onClick={(e) => {
                  setFeedback("Good")
                  setStyle3("border-n");
                }}>
                  <BsFillEmojiHeartEyesFill style={{ color: "yellow", backgroundColor:"black" }} className={style3} size={56} />
                </div>


              </div>
              <div className='col-md-5 d-flex' style={{ justifyContent: "flex-end" }}>
                <button type='button' className="btn2 mx-3" onClick={() => {
                  console.log(feedback);
                }}>Submit</button>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Order
