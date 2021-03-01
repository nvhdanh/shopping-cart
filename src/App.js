import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './pages/ProductList/ProductList'
import Cart from './pages/Cart/Cart'


function App() {
  return (
    <div className="App">
    	<Header></Header>
    	<main>
    		<Switch>
    			<Route path="/cart" component={Cart}/>
                <Route exact path="/" component={ProductList}/>
    		</Switch>
    	</main>
    	<Footer></Footer>
    </div>
  );
}

export default App;
