/**
 *
 * AppBar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function AppBar({
  criteria,
  onChangeCriteria,
  onSuggestionsSearchClick,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <FormattedMessage {...messages.appName} />
      </Navbar.Brand>
      <div className="form-inline navbar-nav ml-auto">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="suggestions">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={criteria}
            onChange={onChangeCriteria}
            placeholder="Article"
            aria-label="Article"
            aria-describedby="suggestions"
          />
          <InputGroup.Append>
            <Button onClick={onSuggestionsSearchClick}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </Navbar>
  );
}

AppBar.propTypes = {};

export default memo(AppBar);
