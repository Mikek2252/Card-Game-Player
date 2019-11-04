import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default Model.extend({
  cardCount: attr(),
  cardLimit: attr(),
  gameContext: belongsTo(),
  hand: hasMany()
});
