import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  hand: null,
  cards: alias('hand.cards')
});
