import React, {Component} from 'react';

export default class ListProduct extends Component {
  render(){
    return (
      <div className="list-product">
        <ul className="list-product-ul">
        {this.props.products.map(function(product){
          return <li key={product.id}>{product.name}</li>;
        })}
        </ul>
      </div>
    );
  }
}
