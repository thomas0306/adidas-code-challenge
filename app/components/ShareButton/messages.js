/*
 * ShareButton Messages
 *
 * This contains all the text for the ShareButton component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ShareButton';

export default defineMessages({
  share: {
    id: `${scope}.share`,
    defaultMessage: 'Share',
  },
  letYourFriendKnows: {
    id: `${scope}.letYourFriendKnows`,
    defaultMessage: 'Let your friends know what you like!',
  },
});
