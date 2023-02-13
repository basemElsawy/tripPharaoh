import React from 'react'
import './packages.css'

const PackageCards = (props) => {
    return (
        <section className="package-cards">
            <div className='cards-container'>
                <div className="img-container">
                    <img src={props.imageMain} className='main-img' width='200px' height='200px' alt="" />
                </div>
                <div className="details-container">
                    <div>
                        <h2 className='detail-header'>{props.tripName}</h2>
                    </div>
                    <div className='detials__contained'>
                        <h3 className='Details'>Details</h3>
                        <p>{props.tripDetails}</p>
                        <div className="price-container">
                            <span>{props.tripPrice}</span>
                            <a href='#'>
                                Book now
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pic-grid'>

                <img src={props.subImg[0]} className='sub-images' width='200px' height='200px' alt="" />
                <img src={props.subImg[1]} className='sub-images' width='200px' height='200px' alt="" />
                <img src={props.subImg[2]} className='sub-images' width='200px' height='200px' alt="" />
                <img src={props.subImg[3]} className='sub-images' alt="" />
            </div>
        </section>
    )
}

export default PackageCards
