import React from 'react'
import './home.css'
import Image1 from '../../components/images/firstPic.jpg'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClassActive: false
        }
        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        this.setState(
            {
                isClassActive: !this.state.isClassActive
            }
        )
    };

    render() {
        return (

            <section className='home section' id='home'>
                <div className='home-container'>
                    <div className='wrapper'>
                        <div className='section-title'>
                            <h1 className='title'>Domestic Delights</h1>
                            <h3 className='subtitle'>Everywhere in Egypt in one place</h3>
                        </div>
                        <div className={this.state.isClassActive ? 'search-container slide-to-right' : 'search-container'}>
                            <input type="text" id='text__input' placeholder='Search for your desired trip' className={this.state.isClassActive ? 'active' : 'text-input'} />
                            <button type='submit' onClick={!this.state.isClassActive ? this.toggleClass : ''} className={this.state.isClassActive ? 'btn search-btn border-radius' : 'btn search-btn'} >
                                Search
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }


}

export default Home
