import {
  create,
  visitable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  submit: clickable('.ui-plaid-link__button')
});
