import React from 'react';
import pan from '../assets/img/Pan.png';
import page from '../assets/img/page.jpg';
import dsc from '../assets/img/DSC.jpg';
import card from '../assets/img/sd-card.jpg';
class ProductList extends React.Component{
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
            ]
        }
    }
    componentWillMount(){
    }
    render(){
        var list = this.state.products.map((item,index)=>(
            <li key={index}>
                <div className='pro-img'>
                    <img src={item.src} alt=''/>
                </div>
                <div className='pro-name'>{item.name}</div>
                <div className='add-cart'>添加购物车</div>
            </li>
        ))
        return <div className='pros-list'>
            <ul>
                {list}
            </ul>
        </div>
    }
}
export default ProductList;