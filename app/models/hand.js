import Model, { attr, belongsTo } from '@ember-data/model'

export default Model.extend({
  deck: belongsTo(),
  cards: attr()
});
