import React from 'react';
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            kind:['cameras','accessories'],
            active:0
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
        var kname = this.state.kind[this.state.active];
        fetch('http://localhost:8081/php1/products.php?kind='+kname,{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            this.setState({
                products:data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    changeKind(num){
        this.setState({
            active:num
        })
        var kname = this.state.kind[num];
        fetch('http://localhost:8081/php1/products.php?kind='+kname,{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({
                products:data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    addCart(pid,pname,pavatar,price){
        fetch('http://localhost:8081/php1/cart.php?proid='+pid+'&pname='+pname+'&pavatar='+pavatar+'&price='+price+'&kind=insert&count=1',{
            method:'GET',
            mode:'cors'
        }).then((res)=>{
            console.log(res);
            return res.json();
        }).then((data)=>{
            console.log(data);
            if(data.code == 200){
                alert("insert success");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        var list = this.state.products.map((item,index)=>(
            <li key={index}>
                <div className='pro-img'>
                    <img src={item.pavatar} alt=''/>
                </div>
                <div className='pro-name'>{item.pname}</div>
                <div className='pro-price'>${item.price}</div>
                <div className='add-cart' onClick={()=>this.addCart(item.pid,item.pname,item.pavatar,item.price)}>TO CART</div>
            </li>
        ))
        return <div className='pros-list'>
            <div className='pro-kind'>
                <span className={this.state.active === 0 && 'active'} onClick={()=>this.changeKind(0)}>CAMERAS</span>
                <span className={this.state.active === 1 && 'active'} onClick={()=>this.changeKind(1)}>ACCESSORIES</span>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    }
}
export default ProductList;