import React, { useState } from 'react'
import './packages.css'

import PicsArray from './PicsArray'


const PackageCards = (props) => {
    const [clicked, setClickedState] = useState(false)
    const [sliderData, setSliderData] = useState(PicsArray[0])


    const handleClick = (index) => {

        const slider = PicsArray[index]
        setSliderData(slider);

        setClickedState(true)
    }
    const notClicked = () => {
        setClickedState(false)
    }

    return (
        <section className="package-cards">
            <div className='containing'>
                <div onClick={() => { notClicked() }} className='cards-container'>
                    <div className="img-container">
                        <img src={clicked ? sliderData.value : props.imageMain} className='main-img' width='200px' height='200px' alt="" />
                    </div>
                    <div className="details-container">
                        <div className='heading'>
                            <h2 className='detail-header'>{props.tripName}</h2>
                        </div>
                        <div className='detials__contained'>
                            <h3 className='Details'>Details</h3>
                            <p>{props.tripDetails}</p>
                            <div className="price-container">
                                <span>{props.tripPrice}</span>
                                <a className='underline' href='#'>
                                    Book now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pic-grid'>
                    {
                        PicsArray.map((val, i) => {
                            if (props.tripName === 'Around giza') {
                                if (val.category === 'Giza-tour-big') {
                                    return (
                                        <div className='sub-images' data-title={val.title} >
                                            <img loading='lazy' src={val.value} key={val.id} onClick={() => {
                                                handleClick(i)
                                            }} />
                                        </div>
                                    )
                                }
                            }
                            if (props.tripName === 'Around Cairo') {
                                if (val.category === 'Cairo-tour-big') {
                                    return (
                                        <div className='sub-images' data-title={val.title}>
                                            <img loading='lazy' src={val.value} key={val.id}
                                                onClick={() => {
                                                    handleClick(i)
                                                }}
                                            />
                                        </div>
                                    )
                                }

                            }

                            if (props.tripName === 'From west to east tour') {
                                if (val.category === 'Giza-tour-small') {
                                    return (
                                        <div className='sub-images' data-title={val.title}>
                                            <img loading='lazy' src={val.value} key={val.id}
                                                onClick={() => {
                                                    handleClick(i)
                                                }}
                                            />
                                        </div>
                                    )
                                }

                            }

                        }


                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default PackageCards
