import React from 'react';
import '../App.css';

const ProductTable = () => (
  <div className="product-table">
    <h3>Product Details</h3>
    <div className="add-product">
      <input type="text" placeholder="Select Products" />
      <input type="number" placeholder="Quantity" />
      <button>Add to Bill</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Discount</th>
          <th>Net Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test1232</td>
          <td>5</td>
          <td>2300</td>
          <td></td>
          <td>11500.00</td>
        </tr>
        <tr>
          <td>Test1202</td>
          <td>5</td>
          <td>2300</td>
          <td></td>
          <td>11500.00</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProductTable;
