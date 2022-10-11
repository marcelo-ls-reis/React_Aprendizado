import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">ERGOLIST</h1>
          <p className="arial">Teste de usabilidade e ergonomia</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;