import React from "react";
import styles from "./Shop.module.css";

// Redux
import { connect } from "react-redux";

import ShopDetail from '../ShopDetail/ShopDetail';

const Shop = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ShopDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);

