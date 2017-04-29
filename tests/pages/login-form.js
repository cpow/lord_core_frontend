import {
  create,
  visitable,
  fillable,
  clickable,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/login'),

  email: fillable('input[type="email"]'),
  password: fillable('input[type="password"]'),
  submit: clickable('button[type=submit]'),
  error: text('.ui.negative.message'),
});
