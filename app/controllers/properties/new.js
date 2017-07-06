import Ember from 'ember';
import { task } from 'ember-concurrency';
import PropertyValidation from 'lord-core-frontend/validations/property';

const { Controller, get } = Ember;

export default Controller.extend({
  PropertyValidation,

  saveProperty: task(function * (changeset) {
    changeset.validate();
    if (changeset.isValid) {
      try{
        yield changeset.save();
        this.transitionToRoute('properties');
      } catch(e) {
        let errors = get(this, 'model.errors');
        errors.forEach(error => {
          let key = error.attribute;
          let validation = error.message;
          changeset.addError(key, { validation });
        });
      }
    }
  }),
});
