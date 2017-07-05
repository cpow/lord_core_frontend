import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  password: 'test1234',
  email: 'user@example.com',
  role: 'tenant',

  company: association()
});
