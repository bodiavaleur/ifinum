import React from 'react';

const Head = () => (
  <header className="head mb-5">
    <h2 className="h2 mx-4">{title()}</h2>
    <hr />
  </header>
);

const title = () => {
  switch (window.location.pathname) {
    case '/invoices':
      return 'Invoices';
    case '/createinvoice':
      return 'Create Invoice';
    default:
      return 'Ifinum';
  }
};

export default Head;
