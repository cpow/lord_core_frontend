import DS from 'ember-data';

const { attr, Model, belongsTo } = DS;

export default Model.extend({
  userId: attr('number'),
  user: belongsTo()
});
