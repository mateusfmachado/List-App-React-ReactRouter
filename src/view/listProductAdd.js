import React, {Component} from 'react';

export default class ListProductAdd extends Component {
  constructor(props){
      super(props);
      this.state = {
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
    this.props.onSubmit(e);
    this.setState({
      value:""
    });
  }

  render(){
    return (
      <form className="list-product-add" onSubmit={this.submitHandle}>
        <div className="form-inline">
          <input className="form-group" name="productName" value={this.state.value} onChange={this.changeInput}/>
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
    );
  }
}
