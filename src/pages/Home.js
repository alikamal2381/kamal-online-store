import React, { Component } from "react";
import data from "../data";
import { Link } from "react-router-dom";
//import Product from "./Product";

class Home extends Component {
  state = {
    name: "",
    category: "",
    image: "",
    price: 0,
    brand: "",
    rating: "",
    numReviews: 0,
  };

  componentDidMount() {
    this.setState({ name: data.name });
    this.setState({ category: data.category });
    this.setState({ image: data.image });
    this.setState({ price: data.price });
    this.setState({ brand: data.brand });
    this.setState({ rating: data.rating });
    this.setState({ numReviews: data.numReviews });
  }

  render() {
    const props = "aa";
    return (
      <div className="App">
        <main className="main">
          <div className="content">
            <ul className="products">
              {data.products.map((product) => (
                <li>
                  <div className="product">
                    <Link to={"/ProductDetail/" + product._id}>
                      <img
                        className="product-image"
                        src={product.image}
                        alt="product"
                      />
                    </Link>

                    <div className="product-name">
                      <Link to={"/ProductDetail/" + product._id}>
                        {product.name}
                      </Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">
                      {product.rating} Stars ({product.numReviews})
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
