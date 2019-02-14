import React, { Component } from 'react';
import Head from './Head';
import Actions from './Actions';
import Invoices from './Invoices';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NewInvoice from './NewInvoice';

const data = require('../db.json');

export default class IfinumApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoices: data.invoices
    };

    this.addNewInvoice = this.addNewInvoice.bind(this);
  }

  addNewInvoice(invoice) {
    const invoices = [...this.state.invoices, invoice];
    this.setState({ invoices: invoices });
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Head />
          <Switch>
            <Route
              path="/invoices"
              render={() => (
                <div>
                  <Actions />
                  <Invoices data={this.state.invoices} />
                </div>
              )}
            />
            <Route
              path="/createinvoice"
              render={() => <NewInvoice addNew={this.addNewInvoice} />}
            />
            <Redirect from="/ifinum" to="/invoices" />
          </Switch>
        </Container>
      </Router>
    );
  }
}
