import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import './AboutPage.scss';

const AboutPage = ()=> {
    return (
        <FadeTransition>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <h1>AboutPage</h1>
            </div>
        </FadeTransition>
    )
}

export default AboutPage;