import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | card', function(hooks) {
  setupTest(hooks);

  test('faceDown | card: null | showBack: null', function(assert) {
    const component = this.owner.factoryFor('component:card').create();
    assert.equal(component.faceDown, true);
  });

  test('faceDown | card: object | showBack: null', function(assert) {
    const component = this.owner.factoryFor('component:card').create();
    component.card = {};
    assert.equal(component.faceDown, false);
  });

  test('faceDown | card: object | showBack: true', function(assert) {
    const component = this.owner.factoryFor('component:card').create();
    component.card = {};
    component.showBack = true;
    assert.equal(component.faceDown, true);
  });

  test('faceDown | card: null | showBack: true', function(assert) {
    const component = this.owner.factoryFor('component:card').create();
    component.showBack = true;
    assert.equal(component.faceDown, true);
  });
});

// faceDown: computed('showBack', 'card', function() {
//   return this.showBack || !this.card;
// })
