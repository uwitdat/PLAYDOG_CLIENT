import React from 'react'
import HeaderBar from '../../HeaderBar/HeaderBar';
import FooterBar from '../../FooterBar/FooterBar';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <HeaderBar />
            
            <div className='HomePage__container'>
                <h1>HomePage</h1>
            </div>

            <FooterBar />
        </>
    )
}

export default HomePage
