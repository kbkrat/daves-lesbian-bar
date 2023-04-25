import EmberRouter from '@ember/routing/router';
import config from 'daves-lesbian-bar/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('narrators');
  this.route('sound-journey');
  this.route('sound-map');
  this.route('about');
  this.route('get-involved');
});
