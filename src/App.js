import React, {useState} from "react";
import "./App.css";
import Nav from './Nav.js';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';

const summarizeCart = (cart) => {
  
}

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  
  return (
    <div className ="App"> 
    <Nav 
    activeTab={activeTab}
    onTabChange={setActiveTab}
     />
     {/* modified code */}
    <main className="App-content">
    <Content tab={activeTab} onAddToCart={addToCart}/>
    </main>
    </div>
  );
};

const Content =({tab, onAddToCart}) => {
  switch (tab) {
    case 'items':
    return <ItemPage items={items}/>;
    case 'cart':
    return <span>the cart</span>;
    default:
    break;
  }
};

export default App;

