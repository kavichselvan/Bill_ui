import React from 'react';
import ProductTable from './ProductTable';
import '../App.css';

const InvoiceForm = () => (
  <div className="invoice-form">
    <h2>Create Invoice</h2>
    <div className="logo-upload">
      <p>Drag & Drop your file or <span>browse</span></p>
    </div>
    <div className="customer-details">
      <input type="text" placeholder="Customer Name" />
      <input type="text" placeholder="Order Number" />
      <input type="date" placeholder="Invoice Date" />
      <input type="date" placeholder="Due Date" />
    </div>
    <ProductTable />
    <div className="discount-notes">
      <input type="number" placeholder="Apply discount to all items" />
      <textarea placeholder="Customer Notes"></textarea>
    </div>
    <div className="terms-conditions">
      <p>Terms & Conditions</p>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
    <div className="summary">
      <p>Sub Total: 23000.00</p>
      <p>Discount: -400.00</p>
      <p>Total Amount: 22600.00</p>
      <button>Save</button>
      <button>Save and Send</button>
    </div>
  </div>
);

export default InvoiceForm;
