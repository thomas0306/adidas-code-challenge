/**
 *
 * SuggestionList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ProductCard from '../ProductCard/Loadable';

function SuggestionList({
  suggestions,
}) {
  return (
    <div>
      {suggestions.map((product, idx) => 
        <ProductCard key={idx} {...product} />
      )}
    </div>
  );
}

SuggestionList.propTypes = {};

export default memo(SuggestionList);
