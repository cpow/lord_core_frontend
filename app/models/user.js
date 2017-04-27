import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
import Ember from 'ember';

const { belongsTo } = DS;

const { computed: { notEmpty } } = Ember;

export default Model.extend({
  passwordConfirmation: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  password: attr('string'),
  role: attr('string'),
  username: attr('string'),

  company: belongsTo('company'),
  stripeAccount: belongsTo('stripe-account'),
  hasStripeAccount: notEmpty('stripeAccount.id')
});

