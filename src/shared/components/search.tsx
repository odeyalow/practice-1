import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import SearchResults from './searchResults';

const Search = () => {
  const [searchField, setSearchField] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearch = (searchField: string): void => {
    if ( searchField.length > 0 || searchField !== '' ) setShowResults(true);
    else setShowResults(false);
  }

  useEffect(() => {
    handleSearch(searchField);
  }, [searchField])

  return (
      <Container>
        <Form>
        <Row>
          <Col style={{ position: 'relative' }}>
            <Form.Control
              value={searchField}
              type="text"
              placeholder="Search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchField(e.target.value)}
              onFocus={() => searchField.length > 0 && setShowResults(true)}
              onBlur={() => {
                setTimeout(() => setShowResults(false), 100);
              }}
            />
            { showResults && <SearchResults searchQuery={searchField}/>}
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