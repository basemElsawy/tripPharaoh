import React, { useState } from 'react'
import './packages.css'
import Data from './data';

import SubImg1 from '../../components/images/packages/memphis.jpeg'
import SubImg2 from '../../components/images/packages/dhashur.jpg'
import SubImg3 from '../../components/images/packages/saqqara.jpg'
import SubImg4 from '../../components/images/packages/pano.webp'
import SubImg5 from '../../components/images/packages/muhammedali.jpg'
import SubImg6 from '../../components/images/packages/musuemEgy.jpg'
import SubImg7 from '../../components/images/packages/salahuddien.jpg'
import SubImg8 from '../../components/images/packages/almoez.jpg'
import SubImg9 from '../../components/images/packages/khan.jpg'
import SubImg10 from '../../components/images/packages/sphinx.jpg'
import SubImg11 from '../../components/images/packages/bazaar.jpg'
import SubImg12 from '../../components/images/packages/almoez.jpg'

const picsArray = [
    { id: 1, category: 'Giza-tour-big', value: SubImg1 },
    { id: 2, category: 'Giza-tour-big', value: SubImg2 },
    { id: 3, category: 'Giza-tour-big', value: SubImg3 },
    { id: 4, category: 'Giza-tour-big', value: SubImg4 },
    { id: 5, category: 'Cairo-tour-big', value: SubImg5 },
    { id: 6, category: 'Cairo-tour-big', value: SubImg6 },
    { id: 7, category: 'Cairo-tour-big', value: SubImg7 },
    { id: 8, category: 'Cairo-tour-big', value: SubImg8 },
    { id: 9, category: 'Giza-tour-small', value: SubImg9 },
    { id: 10, category: 'Giza-tour-small', value: SubImg10 },
    { id: 11, category: 'Giza-tour-small', value: SubImg11 },
    { id: 12, category: 'Giza-tour-small', value: SubImg12 },
]

const pageBody = document.body;

const PackageCards = (props) => {
    const [clicked, setClickedState] = useState(false)
    const [sliderData, setSliderData] = useState(picsArray[0])


    const handleClick = (index) => {

        const slider = picsArray[index]
        setSliderData(slider);

        setClickedState(true)
    }

    return (
        <section className="package-cards">
            <div className='containing'>
                <div className='cards-container'>
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
                        picsArray.map((val, i) => {
                            if (props.tripName === 'Around giza') {
                                if (val.category === 'Giza-tour-big') {
                                    return (
                                        <img src={val.value} key={val.id} onClick={() => {
                                            handleClick(i)
                                        }} className='sub-images' />
                                    )
                                }
                            }
                            if (props.tripName === 'Around Cairo') {
                                if (val.category === 'Cairo-tour-big') {
                                    return (
                                        <img src={val.value} key={val.id}
                                            onClick={() => {
                                                handleClick(i)
                                            }}
                                            className='sub-images' />
                                    )
                                }

                            }

                            if (props.tripName === 'From west to east tour') {
                                if (val.category === 'Giza-tour-small') {
                                    return (
                                        <img src={val.value} key={val.id}
                                            onClick={() => {
                                                handleClick(i)
                                            }}
                                            className='sub-images' />
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
