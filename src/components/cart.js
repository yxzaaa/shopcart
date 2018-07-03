import React from 'react';
import pan from '../assets/img/Pan.png';
import page from '../assets/img/page.jpg';
import dsc from '../assets/img/DSC.jpg';
import card from '../assets/img/sd-card.jpg';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                {
                    src:pan,
                    name:'Wyze cam'
                },
                {
                    src:page,
                    name:'Wyze cam'
                },
                {
                    src:dsc,
                    name:'Wyze cam'
                },
                {
                    src:card,
                    name:'Wyze cam'
                }
            ],
            isOpen:false
        }
    }
    closeCart(){
        this.setState({
            isOpen:false
        })
    }
    openCart(){
        this.setState({
            isOpen:true
        })
    }
    render(){
        var cartList = this.state.products.map((item,index)=>(
            <li className='pro-box' key={index}>
                <div className='cart-img'>
                    <img src={item.src} alt=''/>
                </div>
                <div className='cart-title'>{item.name}</div>
                <div className='go-buy'>BUY</div>
            </li>
        ))
        if(this.state.isOpen === true){
            return <div className='cart-box'>
                <div>CART</div>
                <span onClick={()=>this.closeCart()}>×</span>
                <ul>
                    {cartList}
                </ul>
            </div>
        }else{
            return null;
        }
        
    }
}
export default Cart;