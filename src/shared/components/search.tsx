import { Button, Form, Row, Col, Container } from 'react-bootstrap';

// import SearchResults from './searchResults';

const Search = () => {
    return (
       <Container>
         <Form>
          <Row>
            <Col style={{ position: 'relative' }}>
              <Form.Control
                type="text"
                placeholder="Search"
              />
              {/* <SearchResults /> */}
            </Col>
            <Col xs="auto">
              <Button variant='outline-secondary' type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
       </Container>
    );
}
 
export default Search;