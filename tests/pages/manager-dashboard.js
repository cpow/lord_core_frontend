import {
  create,
  clickable,
  visitable,
  isVisible
} from 'ember-cli-page-object';

export default create({
  scope: '.manager-dashboard',
  visit: visitable('/manager-dashboard'),

  clickNewStripeAccount: clickable('.new-stripe-account__link a'),
  showingNewStripeAccountLink: isVisible('.new-stripe-account__link a')
});
