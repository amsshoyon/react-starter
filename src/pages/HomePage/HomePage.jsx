import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import './HomePage.scss';

const HomePage = ()=> {
    return (
        <FadeTransition>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <h1>HomePage</h1>
            </div>
        </FadeTransition>
    )
}

export default HomePage;