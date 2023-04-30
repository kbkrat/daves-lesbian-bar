import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import RouterService from '@ember/routing/router-service';

interface TextComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class TextComponent extends Component<TextComponentSignature> {
  @service declare router: RouterService;

  get showText() {
    return this.router.currentRouteName !== 'index';
  }

  @tracked declare markdown: string;

  constructor(owner: unknown, args: object) {
    super(owner, args);

    this.loadMarkdownFile();

    this.router.on('routeDidChange', () => this.loadMarkdownFile());
  }

  async loadMarkdownFile() {
    const url = `/markdown/${this.router.currentRouteName}.md`;
    const file = await fetch(url);
    if (file.status === 200) {
      const body = await file.text();
      this.markdown = body;
    } else {
      this.markdown = `# Could not load ${url}`;
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Text: typeof TextComponent;
  }
}
