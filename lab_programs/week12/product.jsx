import React, { Component } from "react";
import Category from "./category.jsx";
import "./product.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Laptop",
      category: "Electronics",
      count: 0,
      isAvailable: false, // conditional rendering
      categories: ["Electronics", "Clothing", "Books"], // list rendering
      form: { name: "", brand: "", subscribe: false } // forms
    };
  }

  // Change category
  changeCategory = () => {
    this.setState({ category: "Accessories" });
  };

  // Counter
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Toggle availability → conditional rendering
  toggleAvailability = () => {
    this.setState({ isAvailable: !this.state.isAvailable });
  };

  // Form change
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state.form, null, 2));
  };

  render() {
    return (
      <div className="product">

        <h2>Product: {this.state.name}</h2>

        {/* PROPS */}
        <Category categoryName={this.state.category} />

        <button onClick={this.changeCategory}>
          Change Category
        </button>

        <button onClick={this.increase}>
          Count: {this.state.count}
        </button>

        {/* ================ CONDITIONAL RENDERING ================ */}

        <h3>Product Availability</h3>

        {this.state.isAvailable ? (
          <p>Product Available</p>
        ) : (
          <p>Product Not Available</p>
        )}

        <button onClick={this.toggleAvailability}>
          Toggle Availability
        </button>

        {/* ================= LIST RENDERING ================= */}

        <h3>Category List</h3>

        <ul>
          {this.state.categories.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        {/* ================= REACT FORMS ================= */}

        <h3>Product Form</h3>

        <form onSubmit={this.handleSubmit}>

          <input
            name="name"
            placeholder="Enter product name"
            onChange={this.handleChange}
          />

          <label>
            <input
              type="radio"
              name="brand"
              value="Dell"
              onChange={this.handleChange}
            />
            Dell
          </label>

          <label>
            <input
              type="radio"
              name="brand"
              value="HP"
              onChange={this.handleChange}
            />
            HP
          </label>

          <label>
            <input
              type="checkbox"
              name="subscribe"
              onChange={this.handleChange}
            />
            Get Updates
          </label>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default Product;