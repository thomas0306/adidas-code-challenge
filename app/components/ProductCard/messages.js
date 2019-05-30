/*
 * ProductCard Messages
 *
 * This contains all the text for the ProductCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ProductCard';

export default defineMessages({
  price : {
    id: `${scope}.price`,
    defaultMessage: 'Price',
  },
  currency : {
    id: `${scope}.price`,
    defaultMessage: '£',
  },
  productId: {
    id: `${scope}.productId`,
    defaultMessage: 'Product ID',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'Rating',
  },
  by: {
    id: `${scope}.by`,
    defaultMessage: 'by',
  },
  customers: {
    id: `${scope}.customers`,
    defaultMessage: 'Customers',
  },
  addToWishlist: {
    id: `${scope}.addToWishlist`,
    defaultMessage: 'Add to wishlist',
  },
  remove: {
    id: `${scope}.remove`,
    defaultMessage: 'Remove',
  },
});
