import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  card: null,
  showBack: null,
  faceDown: computed('showBack', 'card', function() {
    return this.showBack || !this.card;
  })
});
