import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('locale is set', function(assert) {
    const route = this.owner.lookup('route:application');
    const setLocale = sinon.spy(route.intl.setLocale);
    route.intl.setLocale = setLocale;
    route.beforeModel();

    assert.equal(setLocale.callCount, 1, 'setLocale was called');
    assert.deepEqual(
      setLocale.calledWith('en-gb'),
      true,
      'setLocale was called with correct params');
  });
});
