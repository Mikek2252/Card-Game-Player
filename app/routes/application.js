import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments);
    return this.intl.setLocale('en-gb');
  }
});
