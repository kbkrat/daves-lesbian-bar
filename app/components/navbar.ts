import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  get items() {
    return [
      {
        route: 'narrators',
        name: 'Narrators',
      },
      {
        route: 'sound-journey',
        name: 'Sound Journey',
      },
  
      {
        route: 'about',
        name: 'About',
      },
      {
        route: 'get-involved',
        name: 'Get Involved',
      },
    ];
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Navbar: typeof NavbarComponent;
  }
}
