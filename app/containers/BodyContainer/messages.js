/*
 * BodyContainer Messages
 *
 * This contains all the text for the BodyContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.BodyContainer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the BodyContainer container!',
  },
  wishlist: {
    id: `${scope}.wishlist`,
    defaultMessage: 'Wishlist',
  },
  products: {
    id: `${scope}.products`,
    defaultMessage: 'Products',
  },
});
