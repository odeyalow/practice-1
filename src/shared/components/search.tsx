import { Button, Form, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <Form>
        <Row>
          <Col sm="auto">
            <Form.Control
              type="text"
              placeholder="Search"
            />
          </Col>
          <Col xs="auto">
            <Button variant='secondary' type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    );
}
 
export default Search;