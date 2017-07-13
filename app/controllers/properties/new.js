import Ember from 'ember';
import PropertyValidation from 'lord-core-frontend/validations/property';
import { task } from 'ember-concurrency';

const { Controller, get } = Ember;

export default Controller.extend({
  PropertyValidation,

  saveTask: task(function * (changeset) {
    changeset.validate();
    if (get(changeset, 'isValid')) {
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
