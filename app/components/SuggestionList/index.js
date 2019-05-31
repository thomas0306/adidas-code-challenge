/**
 *
 * SuggestionList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ProductCard from '../ProductCard/Loadable';

function SuggestionList({
  suggestions,
  existingArticles,
}) {
  return (
    <div>
      {suggestions.map((product, idx) => 
        <ProductCard key={idx} {...product} disableAdd={existingArticles.find(id => id === product.productid) !== undefined}/>
      )}
    </div>
  );
}

SuggestionList.propTypes = {
  suggestions: PropTypes.array,
  existingArticles: PropTypes.array,
};

export default memo(SuggestionList);
