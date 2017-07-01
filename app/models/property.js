import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),

  company: belongsTo('company')
});
