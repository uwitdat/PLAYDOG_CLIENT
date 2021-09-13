import React from 'react'
import HeaderBar from 'components/HeaderBar/HeaderBar';
import FooterBar from 'components/FooterBar/FooterBar';
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
