import React from "react";
import FadeTransition from "../../components/common/FadeTransition/FadeTransition";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<FadeTransition>
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <h1>404 Not Found</h1>
            </div>
        </FadeTransition>
	);
};

export default NotFound;
