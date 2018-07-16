import React from 'react';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carts:[],
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
    refreshList(){
        fetch('http://localhost:8081/php1/cart.php?kind=select',{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            this.setState({
                carts:data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    down(cid,index){
        var carts = this.state.carts;
        if(carts[index].count>1){
            carts[index].count --; 
            fetch('http://localhost:8081/php1/cart.php?kind=update&cid='+cid+'&count='+carts[index].count,{
                method:'GET',
                mode:'cors'
            }).then((res)=>{
                return res.json();
            }).then(()=>{
                this.setState({
                    carts:carts
                })
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    up(cid,index){
        var carts = this.state.carts;
        carts[index].count ++; 
        fetch('http://localhost:8081/php1/cart.php?kind=update&cid='+cid+'&count='+carts[index].count,{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            return res.json();
        }).then(()=>{
            this.setState({
                carts:carts
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    delete(cid){
        fetch('http://localhost:8081/php1/cart.php?kind=delete&cid='+cid,{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            return res.json();
        }).then(()=>{
            this.refreshList();
        }).catch((err)=>{
            console.log(err);
        })
    }
    yes(){
        alert("buy success!");
    }
    componentDidMount(){
        this.refreshList();
    }
    render(){
        var cartList = this.state.carts.map((item,index)=>(
            <li className='pro-box' key={index}>
                <div className='cart-img'>
                    <img src={item.pavatar} alt=''/>
                </div>
                <div className='cart-title'>{item.pname}</div>
                <div className='cart-price'>${item.price}</div>
                <div className='cart-count'>
                    <span className='down' onClick={()=>this.down(item.cid,index)}>-</span>
                    <span className='count'>{item.count}</span>
                    <span className='up' onClick={()=>this.up(item.cid,index)}>+</span>
                </div>
                <div className='go-buy' onClick={()=>this.yes()}>BUY</div>
                <div className='remove' onClick={()=>this.delete(item.cid)}>DELETE</div>
            </li>
        ))
        if(this.state.isOpen === true){
            return <div className='cart-box'>
                <div>CART</div>
                <span onClick={()=>this.closeCart()}>×</span>
                <span onClick={()=>this.refreshList()} className='refreash'>refresh</span>
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