import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | game', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:game');
    assert.ok(route);
  });

  test('Model creates record and returns it', async function(assert) {
    const route = this.owner.lookup('route:game');
    const model = await route.model();

    assert.expect(2);
    assert.equal(model.playerCount, 2, "playerCount is set");
    assert.equal(model.get('decks.firstObject.cardCount'), 10, 'cardCount is set');
  });
});
