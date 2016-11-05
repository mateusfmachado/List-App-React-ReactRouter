import React, {Component} from 'react';
import ListProduct from './listProduct'

export default class ListProductAdd extends Component {
  constructor(props){
      super(props);
      this.state = {
        products: [
          {id:1,name:"Computer"},
          {id:2,name:"Cellphone"},
          {id:3,name:"Books"},
        ],
        value: ""
      };
      this.changeInput = this.changeInput.bind(this);
      this.submitHandle = this.submitHandle.bind(this);
  }

  changeInput(e){
    this.setState({
      value: e.target.value
    });
  }

  submitHandle(e){
    e.preventDefault();
    let products = this.state.products;
    products.push({id:products.length+1, name:e.target.productName.value});
    this.setState({
      products: products,
      value:""
    });
  }

  render(){
    return (
      <div className="list-product-add">
        <form onSubmit={this.submitHandle}>
          <div className="form-inline">
            <input className="form-group" name="productName" value={this.state.value} onChange={this.changeInput}/>
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
        <ListProduct products={this.state.products} />
      </div>
    );
  }
}
