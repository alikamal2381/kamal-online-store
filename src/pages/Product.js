import React, { Component } from "react";

class Product extends Component {
  render() {
    //const matched = this.state.props.match.params.id;
    //console.log(this.state.props.match.params.id);
    //console.log(matched);
    return (
      <div>
        <h3>Product Screen {`Product = ?`}</h3>
      </div>
    );
  }
}

export default Product;
