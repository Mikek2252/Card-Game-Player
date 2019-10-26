import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  gameContext: null,
  deck: alias("gameContext.decks.firstObject")
});
