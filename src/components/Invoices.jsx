import React from 'react';
import { Container, Table } from 'reactstrap';

const Invoices = props => {
  const invoices = props.data.map((invoice, idx) => (
    <tr key={idx}>
      <td>{invoice.date_created}</td>
      <td>{'INV-' + invoice.number}</td>
      <td>{invoice.date_supply}</td>
      <td>{invoice.comment}</td>
    </tr>
  ));
  return (
    <Container fluid className="bg-white border px-4">
      <Table borderless className="invoices__table">
        <caption className="invoices__caption">Invoices</caption>
        <thead>
          <tr>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>{invoices}</tbody>
      </Table>
    </Container>
  );
};

export default Invoices;
