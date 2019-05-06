import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    search:""
  };


  loadBooks = (event) => {
    event.preventDefault()
    API.searchBook(this.state.search)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" onChange={this.handleInputChange} />
              
              <FormBtn onClick={this.loadBooks}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem >
                   <p>{book.volumeInfo.title}</p> 
                   <p>{book.volumeInfo.authors[0]}</p>
                   <p>{book.volumeInfo.description}</p>
                   <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
                   <p>{book.volumeInfo.link}</p>

                    <button>Save</button>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
