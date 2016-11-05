import React, {Component} from 'react';
import ListProductView from './listProductView'

export default class ListProductAdd extends Component {
  constructor(props){
      super(props);
      this.state = {
        products: [
          {id:1,name:"Computer"},
          {id:2,name:"Cellphone"},
          {id:3,name:"Books"},
        ],
        value: "",
        func: 'insert',
        idProdEdit: ""
      };
      this.changeInput = this.changeInput.bind(this);
      this.submitHandle = this.submitHandle.bind(this);
      this.changeFuncEdit = this.changeFuncEdit.bind(this);
      this.editHandle = this.editHandle.bind(this);
      this.changeFuncInsert = this.changeFuncInsert.bind(this);
      this.deleteHandle = this.deleteHandle.bind(this);
  }

  changeInput(e){
    this.setState({
      value: e.target.value
    });
  }

  changeFuncEdit(idx, e) {
    const _id = idx;
    this.setState({
      func: 'edit',
      idProdEdit: _id,
      value: this.state.products[_id].name
    });
  }

  changeFuncInsert() {
    this.setState({
      func: 'insert',
      idProdEdit: "",
      value: ''
    });
  }

  submitHandle(e){
    e.preventDefault();
    let products = this.state.products;
    let _id;
    if(!products[products.length-1]){
      _id = 1;
    } else {
      _id = products[products.length-1].id+1;
    }
    products.push({id:_id, name:e.target.productName.value});
    this.setState({
      products: products,
      value:""
    });
  }

  editHandle(e){
    e.preventDefault();
    let products = this.state.products;
    products[this.state.idProdEdit].name = e.target.productName.value;
    this.setState({
      func: 'insert',
      products: products,
      idProdEdit: "",
      value:""
    });
  }

  deleteHandle(idx, e){
    let products = this.state.products;
    products.splice(idx, 1);
    this.setState({
      products: products
    });
    console.log(this.state.products);
  }

  render(){
    var func;
    if(this.state.func === 'insert'){
      func = (
        <form onSubmit={this.submitHandle}>
          <div className="form-inline">
            <input className="form-group" name="productName" value={this.state.value} onChange={this.changeInput}/>
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      );
    } else if(this.state.func === 'edit'){
      func = (
        <form onSubmit={this.editHandle}>
          <div className="form-inline">
            <input className="form-group" name="productName" value={this.state.value} onChange={this.changeInput}/>
            <button className="btn btn-primary" type="submit">Edit</button>
            <a onClick={this.changeFuncInsert}>Cancel</a>
          </div>
        </form>
      );
    }
    return (
      <div className="list-product-add">
        {func}
        <br />
        <ListProductView products={this.state.products} onEdit={this.changeFuncEdit} onDelete={this.deleteHandle}/>
      </div>
    );
  }
}
