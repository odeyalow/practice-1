import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import SearchResults from '@/shared/components/searchResults';
import { AppDispatch, RootState } from '@/app/store';;
import { SetQuery } from '@/features/search/searchSlice';

const Search = () => {
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const dispatch = useDispatch<AppDispatch>();
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearch = (searchField: string): void => {
    if ( searchField.length > 0 || searchField !== '' ) setShowResults(true);
    else setShowResults(false);
  }

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery])

  return (
      <Container>
        <Form>
        <Row>
          <Col style={{ position: 'relative' }}>
            <Form.Control
              value={searchQuery}
              type="text"
              placeholder="Find by specific request"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(SetQuery(e.target.value))}
              onFocus={() => searchQuery.length > 0 && setShowResults(true)}
              onBlur={() => {
                setTimeout(() => setShowResults(false), 250);
              }}
            />
            { showResults && <SearchResults searchQuery={searchQuery}/>}
          </Col>
          <Col xs="auto">
            <Link
            to={`/products/search/${searchQuery}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => searchQuery.length === 0 && e.preventDefault()}>
              <Button
              variant='outline-secondary'
              disabled={searchQuery.length === 0}
              >Search</Button>
            </Link>
          </Col>
        </Row>
      </Form>
      </Container>
  );
}
 
export default Search;