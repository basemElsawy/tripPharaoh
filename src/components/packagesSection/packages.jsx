import React, { useState } from 'react'
import './packages.css'
import Image1 from '../../components/images/Kingtut.jpg'
import PackageCards from './packageCards'
import Data from './data'



const Packages = (props) => {

    const [dropDown, setDropDown] = useState(false)

    const dropDownCLick = () => {
        setDropDown(!false)

    }

    return (
        <section className="packages" id="packages">
            <div className="packages-container">
                <div className='packages-wrapper'>
                    <div className='packages-headers'>

                        <h1>Around Egypt</h1>
                        <h3>Offers on special packages </h3>
                    </div>
                    <div>
                        <div className='image-wrapper'>
                            <img src={Image1} className='king-tut-img' alt="" />
                            <div className='text--wrapper'>
                                <p>Word from king tut himself, Packages specially picked and chosen for your ancient egyptian mood .  </p>
                            </div>
                        </div>

                    </div>
                    <div className='show-offers'>
                        <button onClick={() => {
                            dropDownCLick()
                        }} className='btn show-offers'>Show offers</button>
                    </div>
                </div>
            </div>
            <div className='trip-packages'>
                {Data.map((val, id) => {
                    return (
                        <div className={dropDown ? 'drop-down-animation' : ''}>
                            <PackageCards key={id} imageMain={val.imageMain} tripName={val.tripName} tripDetails={val.tripDetails} subImg={val.subImg} tripPrice={val.tripPrice} />
                        </div>
                    )
                })}

            </div>

        </section>
    )
}


export default Packages
