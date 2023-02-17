import React from "react";
import './giza.css'

const TripCards = (props) => {

    return (
        <section className='trip-cards-sect'>
            <div className="containing-cards">
                <div className="trip-cards-container">
                    <div className="trip-img-container">
                        <img src={props.TourImage} className='tour-imgs' alt="" />
                        <span className='tour-name'>{props.TourName}</span>
                    </div>
                    <div className="btn-price">
                        <span className='tour-price'>{props.Price}</span>
                        <a href="#" className='btn book-trip'> Book now</a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default TripCards;