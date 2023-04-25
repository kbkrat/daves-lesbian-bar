import Route from '@ember/routing/route';

interface MapMarker {
  title: string;
  lat: number;
  long: number;
  location: string;
  address: string;
  link: string;
}

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/data.json');
    const data: MapMarker[] = await response.json();
    return data;
  }
}
