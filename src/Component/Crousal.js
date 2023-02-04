import React from 'react'

const Crousal = ({ imageUrl }) => {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imageUrl ? <>{imageUrl.map((source, i) => (<>
                    <div className="carousel-item active" key={i}>
                        <img src={source} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                </>))}</> : <div>Image AAega</div>}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Crousal
