import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {


   return (
		<header className="py-3 bg-dark text-light">
			<ul className="d-flex justify-content-center list-unstyled">
				<li className="px-4"><Link to="/">Home</Link></li>
				<li className="px-4"><Link to="/about">About</Link></li>
			</ul>
		</header>
   )
}

export default Header;