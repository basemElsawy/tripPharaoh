import React, { useState } from 'react'
import './packages.css'
import Image1 from '../../components/images/Kingtut.jpg'
import PackageCards from './packageCards'
import Data from './data'



const Packages = (props) => {

    const [dropDown, setDropDown] = useState(false)
    const [valueOfEl, setValue] = useState({
        ifClickTrue: <div className='show-offers btn'> <span>show offers</span><span>&#x25BC;</span> </div>
        , ifClickFalse: <div className='show-offers btn'> <span>Close offers</span><span>&#x25B2;</span> </div>
    })
    const dropDownCLick = () => {
        setDropDown(true)


    }

    const menuDisappear = () => {
        setDropDown(false)
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
                        <a href='#packages-menu' onClick={() => {
                            !dropDown ? dropDownCLick() : menuDisappear()
                        }} >{
                                !dropDown ? valueOfEl.ifClickTrue : valueOfEl.ifClickFalse
                            }</a>
                    </div>
                </div>
            </div>
            <div id='packages-menu' className={dropDown ? 'active-packages' : 'trip-packages'}>
                {Data.map((val, id) => {
                    return (
                        <div>
                            <PackageCards key={id} imageMain={val.imageMain} tripName={val.tripName} tripDetails={val.tripDetails} subImg={val.subImg} tripPrice={val.tripPrice} />
                        </div>
                    )
                })}

            </div>

        </section>
    )
}


export default Packages
