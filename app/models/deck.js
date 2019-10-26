import Model, { attr, belongsTo } from "@ember-data/model";

export default Model.extend({
  cardCount: attr(),
  cardLimit: attr(),
  gameContext: belongsTo()
});
