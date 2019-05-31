/**
 *
 * Wishlist
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProductCard from '../ProductCard';

function Wishlist({
  wishlist,
}) {
  return (
    <div className="flex-grow-1 overflow-auto">
      {wishlist.map((product, idx) => 
        <ProductCard key={idx} {...product} />
      )}
    </div>
  );
}

Wishlist.propTypes = {
  wishlist: PropTypes.array,
};

export default memo(Wishlist);
