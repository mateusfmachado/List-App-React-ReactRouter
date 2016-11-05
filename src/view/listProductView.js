import React, {Component} from 'react';

export default class ListProductView extends Component {
  render(){
    var _this = this;
    return (
      <div className="list-product">
        <table className="list-product-ul table table-condensed">
          <thead>
            <th>Product Name</th>
          </thead>
          <tbody>
            {this.props.products.map(function(product,idx){
              return (<tr key={idx}>
                <td>{product.id} - {product.name}</td>
                <td><a onClick={_this.props.onEdit.bind(this, idx)}>Edit</a></td>
                <td><a onClick={_this.props.onDelete.bind(this, idx)}>Delete</a></td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
