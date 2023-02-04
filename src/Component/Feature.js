import React from 'react'

const Feature = ({title,category,color}) => {
  return (
    <>
      <div className="row">
              <div className="col-md-12, textalign-center" style={{ fontFamily: "EB Garamond, serif" }}>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-6 ">
                <ul className="text-secondary margin">
                  <li>Brand</li>
                  <li>Length Type</li>
                  <li>Color</li>
                  <li>Category</li>
                </ul>
              </div>
              <div className="col-md-6 col-6 ">
                <ul className="text-secondary margin">
                  <li>Dressnality</li>
                  <li>Above knee</li>
                  <li>{color}</li>
                  <li>{category}</li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default Feature
