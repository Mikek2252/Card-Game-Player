import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('game-context', {
      playerCount: 2,
      deck: this.store.createRecord('deck', {
        cardCount: 10
      })
    })
  }
});
