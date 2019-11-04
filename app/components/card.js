import Component from '@ember/component';
import { computed } from '@ember/object';
import { not } from '@ember/object/computed';

export default Component.extend({
  card: null,
  showBack: null,
  faceDown: computed('showBack', 'card', function() {
    return this.showBack || !this.card;
  }),
  faceUp: not('faceDown')
});
