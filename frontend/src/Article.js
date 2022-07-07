import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Aprendizado React_Bootstrap</h1>
          <p className="lead">Pagina usada para treinar basico do React e React_Bootstrap</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;