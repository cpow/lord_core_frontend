import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  name: 'Brittin ave 3 family',
  address: '32-34 brittin ave',

  company: belongsTo(),
});
