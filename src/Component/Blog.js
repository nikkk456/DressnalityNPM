import React from 'react'

const Blog = () => {
    return (
        <div className='container '>
            <div className='row my-2'>
                <div class="card" style={{ border: "none" }}>
                    <h5 class="card-header">Why DressNality?</h5>
                    <div class="card-body">
                        <p class="card-text">Dressnality is not just a brand but a vision to create an all inclusive brand for each and every body type, where we believe that beauty is not bounded by measurements and size charts. We are the brand which focuses on the needs of customers and that no one should feel that this dress is not for me because it is not available in my size or the print that I wanted.</p>
                        <a href="/Blog1" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <div class="card" style={{ border: "none" }}>
                    <h5 class="card-header">How to customise</h5>
                    <div class="card-body">
                        <h5 class="card-title">With Dressnality, you are given an opportunity to customise your outfit with us.</h5>
                        <p class="card-text">Being India’s first website where you can customise your whole outfit without any hassle and your customised apparel will reach to you as soon as possible.<br/>
                            With few easy steps, anyone can customise according to their own perfectly fitted measurements, amazing and comfortable fabrics and beautiful designs.
                        </p>
                        <a href="/Blog3" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <div class="card" style={{ border: "none" }}>
                    <h5 class="card-header">YOUR BODY BELONGS TO YOU</h5>
                    <div class="card-body">
                        <h5 class="card-title">Let your heart decide what to wear not the measurement charts.</h5>
                        <p class="card-text">Body positivity is not just a mere term or a trend but it is a social necessity that will make our society a better place to be in. everybody is different and unique and that is what makes us distinct and beautiful. From ages, society is trying to bound beauties into standards and we as a part of societies are just trying to fit in those standards which is impossible to do because we are different and that is the most gorgeous thing about us. </p>
                        <a href="/Blog2" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
