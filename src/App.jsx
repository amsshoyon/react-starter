import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import classNames from "classnames";
import Routes from "./routes/Routes";
import Manifest from "./manifest";

// Node plugins
import 'bootstrap/scss/bootstrap.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";

// Theme styles
import "./styles/style.scss";

// App Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

const App = (props) => {
	const [loader, setLoader] = useState(true);
	const [animate, setAnimate] = useState(false);

	var pageClasses = classNames({
		"visible": animate
	});
	
	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
			setAnimate(true);
		}, 1500);
	}, [])
	
	return (
		<BrowserRouter>
			<Helmet>
				<title>{Manifest.title}</title>
				<meta name="description" content={Manifest.description} />
				<meta name="keywords" content={Manifest.keywords} />
				<meta name="author" content={Manifest.author} />
            </Helmet>
			<Preloader visibility={loader} />
			<div className={"preloader "+ pageClasses}>
				<Header />
				<main className="main">
					<Routes />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;

