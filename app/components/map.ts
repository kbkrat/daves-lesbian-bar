import Component from '@glimmer/component';
import { MapMarker } from 'daves-lesbian-bar/routes';

interface MapComponentSignature {
  Element: HTMLDivElement;
  Args: {
    places: MapMarker[];
  };
  Blocks: {
    default: [];
  };
}

export default class MapComponent extends Component<MapComponentSignature> {
  get lat() {
    return 40.769096;
  }

  get lng() {
    return -73.910661;
  }

  get zoom() {
    return 15;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Map: typeof MapComponent;
  }
}
