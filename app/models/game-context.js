import Model, { attr, belongsTo } from '@ember-data/model'

export default Model.extend({
  playerCount: attr(),
  deck: belongsTo()
});
