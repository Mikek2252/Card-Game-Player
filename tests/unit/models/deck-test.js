import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | deck', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('deck', {});
    assert.ok(model);
  });
});
