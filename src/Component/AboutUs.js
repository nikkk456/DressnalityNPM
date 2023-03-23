import React from 'react'

const AboutUs = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>About Us </h2>
      <p className='text-center'>Dressnality is the brand which focuses on the customizable outfits at very reasonable prices. <br/>Started with the vision of reducing the hassle of tailoring process, it delivers specially made dress at your doorstep. It is based in the city of Gurugram with the idea of spreading our vision to the entire country. <br/>The brand is founded by two young business enthusiasts Ms. Sananda Roy and Mr. Nikhil Mishra, who are creatively, dedicated their heart and soul into the venture. Our team has well trained tailors with working experience of more than 10 years in the fashion industry. Our teams are collectively working together for providing you with the wonderful shopping experience at our brand Dressnality. </p>
      <h3 className='text-center'>Our Team </h3>
      <hr/>
      <div className='d-flex' style={{justifyContent:"space-between"}}>
        <div style={{width:"36%",display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img src='./Image/Nikhil.jpeg' alt='nikhil' style={{borderRadius:"220px", width:"100%"}}></img>
        <small>
          Nikhil Mishra <br/>
          B.tech Cse (UIET, KUK) <br/>
          Technical and designer support
        </small>
        </div>
        <div style={{width:"36%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <img src='./Image/Sananda.jpeg' alt='Sananda' style={{borderRadius:"330px", width:"86%"}}></img>
        <small>
          Sananda Roy <br/>
          Fashion Designer <br/>
        </small>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
