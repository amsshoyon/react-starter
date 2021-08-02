import React, {useState, useEffect} from 'react';
import FadeTransition from '../common/FadeTransition/FadeTransition';
import './Preloader.scss';

const Preloader = ({visibility})=> {
    const [showPreloader, setshowPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshowPreloader(false);
        }, 300);
    }, [])
    
    return (
        <React.Fragment>
            {showPreloader && 
                <FadeTransition className="preloading d-flex justify-content-center align-items-center vw-100 vh-100 position-fixed top-0 left-0"
                    initial={{y: 0}} exit={{ y: 0 }} animate={{ opacity: visibility ? 1 : 0}}
                    >
                    <div className="loader-wrapper">
                        <img src="/loader.gif" alt="" />
                    </div>
                </FadeTransition>
            }
        </React.Fragment>
    )
}

export default Preloader;