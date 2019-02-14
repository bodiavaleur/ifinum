import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Actions = () => {
  return (
    <Container fluid className="bg-white border py-4 mb-5">
      <h5 className="h5 ml-4">Actions</h5>

      <Link to="/createinvoice">
        <Button color="primary" className="btn-lg px-4 py-2 ml-4">
          Add new
        </Button>
      </Link>
    </Container>
  );
};

export default Actions;
