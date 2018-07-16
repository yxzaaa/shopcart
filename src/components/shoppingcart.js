import React from 'react';
import Banner from './banner.js';
import ProductList from './productlist.js';
import Cart from './cart.js';
import cartIcon from '../assets/img/cart.jpg';

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }
    open(){
        this.refs.getChild.openCart();
        this.refs.getChild.refreshList();
    }
    render(){
        return <div className='shopcart-box'>
            <div className='cart-icon' onClick={()=>this.open()}>
                <img src={cartIcon} alt='1'/>
            </div>
            <Banner />
            <ProductList />
            <Cart ref='getChild'/> 
        </div>
    }
}
export default ShoppingCart;