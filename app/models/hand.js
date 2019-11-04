import Model, { hasMany, belongsTo } from '@ember-data/model'

export default Model.extend({
  deck: belongsTo(),
  cards: hasMany()
});
