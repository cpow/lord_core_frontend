import {
  validatePresence
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence({presence: true, message: '{description} should be present'})
  ],
  address: [
    validatePresence({presence: true, message: '{description} should be present'})
  ],
  zip: [
    validatePresence({presence: true, message: '{description} should be present'})
  ],
};
