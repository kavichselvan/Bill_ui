import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import InvoiceForm from './components/InvoiceForm';
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Header />
      <InvoiceForm />
    </div>
  </div>
);

export default App;
