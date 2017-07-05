import {
  create,
  visitable,
  text,
  collection,
} from 'ember-cli-page-object';


export default create({
  scope: '.company-properties',
  visit: visitable('/properties'),

  properties: collection({
    scope: 'table.company-properties__table',
    itemScope: 'tbody tr',

    item: {
      name: text('td', {at:0}),
    },
  }),
});
