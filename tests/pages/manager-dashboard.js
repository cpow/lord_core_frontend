import {
  create,
  clickable,
  visitable,
  isVisible
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/manager-dashboard'),

  clickNewStripeAccount: clickable('a.new-stripe-account__link'),
  showingNewStripeAccountLink: isVisible('a.new-stripe-account__link'),

  clickOnProperties: clickable('a.company-properties__link'),
  showingPropertiesLink: isVisible('a.company-properties__link'),
});
