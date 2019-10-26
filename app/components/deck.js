import Component from '@ember/component';

export default Component.extend({
  deck: null,
  actions: {
    drawCard() {
      const deck = this.get("deck");
      if (deck.cardCount > 0) {
        deck.decrementProperty("cardCount");
      } else {
        alert("You have ran out of cards")
      }
    }
  }
});
