import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import './Header.css'

const Header = props =>{
	const count = useSelector(state=>state.cart.sum)

	return(
		<header className="Header">
			<nav>
				<div className="Logo">
					<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
				</div>
				<ul>
					<li><Link exact="true" to="/">Product List</Link></li>
					<li><Link to="/cart">Cart ({count})</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header