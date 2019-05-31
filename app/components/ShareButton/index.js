/**
 *
 * ShareButton
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// bootstrap
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faCopy } from '@fortawesome/free-solid-svg-icons';

function ShareButton() {

  const copyToClipboard = (e) => {
    document.getElementById('shareUrl').select();
    document.execCommand('copy');
    e.target.focus();
  };

  const popover = (
    <Popover id="popover-basic" title="Share your wishlist!">
      <div className="mb-2"><FormattedMessage {...messages.letYourFriendKnows} /></div>
      <InputGroup>
        <FormControl id="shareUrl" value={window.location.href} />
        <InputGroup.Append>
          <Button variant="outline-primary" onclick><FontAwesomeIcon icon={faCopy} onClick={copyToClipboard} /></Button>
        </InputGroup.Append>
      </InputGroup>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button>
        <FormattedMessage {...messages.share} /> <FontAwesomeIcon icon={faShareAlt} />
      </Button>
    </OverlayTrigger>
  );
}

ShareButton.propTypes = {};

export default memo(ShareButton);
