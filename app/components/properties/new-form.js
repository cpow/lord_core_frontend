import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, get } = Ember;

export default Component.extend({
  saveTask: task(function * (changeset) {
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
