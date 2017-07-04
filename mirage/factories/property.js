import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'Brittin ave 3 family',
  address: '32-34 brittin ave',

  company: association(),
});
