import { Button, Form, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-300"
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