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

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function AppBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <FormattedMessage {...messages.appName} />
      </Navbar.Brand>
      <Form className="form-inline navbar-nav ml-auto">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="suggestions">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Article"
            aria-label="Article"
            aria-describedby="suggestions"
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
}

AppBar.propTypes = {};

export default memo(AppBar);
