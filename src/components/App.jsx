import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import axios from "axios";
import MenuComponent from "./MenuComponent";
import BookCard from "./BookCard";
import Filter from "../containers/Filter";

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Filter />
        <Card.Group itemPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
