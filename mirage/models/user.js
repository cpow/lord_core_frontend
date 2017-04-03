import { Model } from 'ember-cli-mirage';

export default Model.extend({
  password: 'test1234',
  email: 'user@example.com',
  role: 'tenant'
});
