import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form
} from 'reactstrap';

export default class NewInvoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      date_created: '',
      date_supply: '',
      comment: '',
      isSubmitted: false
    };
  }

  isValid(inputValues) {
    const numberRegexp = /^\d+$/;
    const dateRegexp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    if (
      numberRegexp.test(inputValues.number) &&
      dateRegexp.test(inputValues.date_created) &&
      dateRegexp.test(inputValues.date_supply)
    ) {
      return true;
    }

    return false;
  }

  submitNewInvoice() {
    return evt => {
      evt.preventDefault();

      if (!this.isValid(this.state)) return alert('Wrong value!');

      this.props.addNew({ ...this.state });

      this.setState({ isSubmitted: true });
    };
  }

  setValueTo(state, value) {
    this.setState({ [state]: value });
  }

  createInput(idName, label, icon, type = '') {
    const inputType = type ? type : null;
    return (
      <div className="newinvoice__inputgroup p-4">
        <label htmlFor={'invoice-' + idName}>{label}:</label>
        <InputGroup>
          <Input
            type={inputType}
            id={'invoice-' + idName}
            onChange={e => this.setValueTo(idName, e.target.value)}
          />
          <InputGroupAddon addonType="append">{icon}</InputGroupAddon>
        </InputGroup>
      </div>
    );
  }

  render() {
    return (
      <Container className="newinvoice bg-white border p-4" fluid>
        <Form
          className="newinvoice__form border p-4"
          onSubmit={this.submitNewInvoice()}
          id="newinvoice-form"
          action="/invoices">
          <div className="newinvoice__inputs">
            {this.createInput('number', 'Number', '')}
            {this.createInput('date_created', 'Invoice Date', '', 'date')}
            {this.createInput('date_supply', 'Supply Date', '', 'date')}
          </div>
          <div className="newinvoice__textarea">
            <label htmlFor="invoice-textarea">Comment:</label>
            <Input
              type="textarea"
              id="invoice-comment"
              onChange={e => this.setValueTo('comment', e.target.value)}
            />
          </div>
        </Form>
        <Button
          type="submit"
          form="newinvoice-form"
          className="newinvoice__button my-3 py-2 px-5"
          color="primary">
          Save
        </Button>

        {this.state.isSubmitted ? <Redirect to="/invoices" /> : null}
      </Container>
    );
  }
}
