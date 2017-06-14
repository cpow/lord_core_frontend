import {
  create,
  clickable,
  visitable,
  isVisible
} from 'ember-cli-page-object';

export default create({
  scope: '.tenant-dashboard',
  visit: visitable('/tenant-dashboard'),

  clickNewStripeAccount: clickable('.new-stripe-account__link a'),
  showingNewStripeAccountLink: isVisible('.new-stripe-account__link a')
});
