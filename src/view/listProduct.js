import React, {Component} from 'react';
import ListProductAdd from './listProductAdd';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {id:1,name:"Computer"},
        {id:2,name:"Cellphone"},
        {id:3,name:"Books"},
      ]
    };
    this.insertProduct = this.insertProduct.bind(this);
  }

  insertProduct(e) {
    e.preventDefault();
    let products = this.state.products;
    products.push({id:products.length+1, name:e.target.productName.value});
    this.setState({
      products: products
    });
  }

  render(){
    return (
      <div className="list-product">
        <ListProductAdd onSubmit={this.insertProduct} />
        <ul className="list-product-ul">
        {this.state.products.map(function(product){
          return <li key={product.id}>{product.name}</li>;
        })}
        </ul>
      </div>
    );
  }
}
