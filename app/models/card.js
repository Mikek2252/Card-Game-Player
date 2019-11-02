import Model, { attr, belongsTo } from "@ember-data/model";

export default Model.extend({
  title: attr(),
  image: attr(),
  description: attr(),
  deck: belongsTo()
});
