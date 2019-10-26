import Model, { attr, hasMany } from '@ember-data/model'

export default Model.extend({
  playerCount: attr(),
  decks: hasMany()
});
