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
                    name:'Wyze cam',
                    price:'12.99'
                },
                {
                    src:page,
                    name:'Wyze cam',
                    price:'12.99'
                },
                {
                    src:dsc,
                    name:'Wyze cam',
                    price:'12.99'
                },
                {
                    src:card,
                    name:'Wyze cam',
                    price:'12.99'
                }
            ],
            kind:0
        }
    }
    componentWillMount(){
    }
    changeKind(num){
        this.setState({
            kind:num
        })
    }
    render(){
        var list = this.state.products.map((item,index)=>(
            <li key={index}>
                <div className='pro-img'>
                    <img src={item.src} alt=''/>
                </div>
                <div className='pro-name'>{item.name}</div>
                <div className='pro-price'>${item.price}</div>
                <div className='add-cart'>添加购物车</div>
            </li>
        ))
        return <div className='pros-list'>
            <div className='pro-kind'>
                <span className={this.state.kind === 0 && 'active'} onClick={()=>this.changeKind(0)}>cameras</span>
                <span className={this.state.kind === 1 && 'active'} onClick={()=>this.changeKind(1)}>accessories</span>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    }
}
export default ProductList;