import React from 'react'
import { useState } from 'react'
import { ref as ref_storage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase'
import { db } from '../Firebase'
import { ref as ref_database, child, set, get } from 'firebase/database';

const ProductInsert = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: "",
        featured: "",
        quantity: "",
        category: ""
    })

    const [imageUpload, setImageUpload] = useState([]);
    const urls = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description, price, featured, quantity, category } = values;

        imageUpload.map( (image) => {
            const imageRef = ref_storage(storage, `Products/${image.name}`); // /iske baad file name aaega
            uploadBytes(imageRef, image).then(() => {
                console.log("Image POSTED");
                // setImageUpload(null);
                 getDownloadURL(imageRef).then((url) => {
                    urls.push(url);
                    console.log(urls);
                });

            });
        })


        setTimeout(() => {
            set(ref_database(db, 'Products/' + title), {
                title: title,
                description: description,
                imageUrl: urls,
                price: price,
                quantity: quantity,
                featured: featured,
                category: category,
            }).then(() => {
                alert("Successfully Posted");
                setValues({
                    title: "", description: "", price: "", quantity: "", category: ""
                })
                setImageUpload(null);
                window.location.reload(true);
            })
        }, 15000);

    }

    return (
        <div>
            <section className="vh-100 gradient-custom-2">
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 col-md-offset-2">
                            <h1>Insert Product</h1>
                            <form action="" method="POST">

                                <div className="form-group my-2">
                                    <label htmlFor="title">Title <span className="require">*</span></label>
                                    <input type="text" className="form-control" value={values.title} onChange={(event) => {
                                        setValues((prev) => ({ ...prev, title: event.target.value }))
                                    }} name="title" />
                                </div>

                                <div className="form-group has-error my-2">
                                    <label htmlFor="slug">Attach Image<span className="require">*</span> </label>
                                    <input type="file" className="form-control" multiple onChange={(event) => {
                                        for (let index = 0; index < event.target.files.length; index++) {
                                            const newImage = event.target.files[index];
                                            newImage["id"] = Math.random();
                                            setImageUpload((prevState) => [...prevState, newImage]);
                                        }
                                    }} name="image" />
                                </div>
                                <div className='row'>
                                    <div className="col-md-6 mb-2">

                                        <h6 className="mb-2 pb-1">Category: </h6>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                value="Kurti" onChange={(event) => {
                                                    setValues((prev) => ({ ...prev, category: event.target.value }))
                                                }} />
                                            <label className="form-check-label" htmlFor="femaleGender">Kurti</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                value="Dress" onChange={(event) => {
                                                    setValues((prev) => ({ ...prev, category: event.target.value }))
                                                }} defaultChecked />
                                            <label className="form-check-label" htmlFor="maleGender">Dress</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                value="Tshirts" onChange={(event) => {
                                                    setValues((prev) => ({ ...prev, category: event.target.value }))
                                                }} />
                                            <label className="form-check-label" htmlFor="otherGender">Tshirts</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                value="Tops" onChange={(event) => {
                                                    setValues((prev) => ({ ...prev, category: event.target.value }))
                                                }} />
                                            <label className="form-check-label" htmlFor="otherGender">Tops</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12 mb-2 pb-2">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="emailAddress">No. of pieces available</label>
                                            <input type="tel" value={values.quantity} id="Charge" onChange={(event) => {
                                                setValues((prev) => ({ ...prev, quantity: event.target.value }))
                                            }} className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="FeaturedItem"
                                                value="true" onChange={(event) => {
                                                    setValues((prev) => ({ ...prev, featured: event.target.value }))
                                                }} />
                                            <label className="form-check-label" htmlFor="maleGender">Featured</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12 mb-2 pb-2">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="emailAddress">Price</label>
                                            <input type="number" value={values.price} id="Charge" onChange={(event) => {
                                                setValues((prev) => ({ ...prev, price: event.target.value }))
                                            }} className="form-control form-control-lg" />
                                        </div>

                                    </div>
                                </div>


                                <div className="form-group my-2">
                                    <label htmlFor="description">Description</label>
                                    <textarea rows="5" className="form-control" value={values.description} onChange={(event) => {
                                        setValues((prev) => ({ ...prev, description: event.target.value }))
                                    }} name="description" ></textarea>
                                </div>

                                <div className="form-group">
                                    <p><span className="require">*</span> - required fields</p>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        Create
                                    </button>
                                    <button className="btn btn-default">
                                        Cancel
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductInsert
