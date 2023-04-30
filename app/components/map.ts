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
    return 40.748637;
  }

  get lng() {
    return -73.936503;
  }

  get zoom() {
    return 12;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Map: typeof MapComponent;
  }
}
