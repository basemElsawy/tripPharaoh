import React from 'react'
import './packages.css'

const PackageCards = (props) => {
    return (
        <section className="package-cards">
            <div className='cards-container'>
                <div className="img-container">
                    <img src={props.imageMain} width='200px' height='200px' alt="" />
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
            <div>
                <img src={props.subImg[0]} width='200px' height='200px' alt="" />
                <img src={props.subImg[1]} width='200px' height='200px' alt="" />
                <img src={props.subImg[2]} width='200px' height='200px' alt="" />
            </div>
        </section>
    )
}

export default PackageCards
