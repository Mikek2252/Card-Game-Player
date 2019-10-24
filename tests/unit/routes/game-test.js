import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import sinon from 'sinon';

module('Unit | Route | game', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:game');
    assert.ok(route);
  });

  test('Model creates record and returns it', function(assert) {
    const route = this.owner.lookup('route:game');
    const object = EmberObject.create({
      playerCount: 2
    });
    const createRecord = sinon.stub().returns(object);
    route.set("store", {
      createRecord
    });

    route.model();
    assert.expect(2);
    assert.equal(createRecord.callCount, 1, 'createRecord is called');
    assert.deepEqual(createRecord.calledWith('game-context', { playerCount: 2 }), true);

  })
});
