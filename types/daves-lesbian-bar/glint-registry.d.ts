import '@glint/environment-ember-loose';
import MarkdownToHtml from 'ember-cli-showdown/components/markdown-to-html';
import { ComponentLike } from "@glint/template";

export interface EmberLeafletLayers {
  tile: ComponentLike<{
    Args: {
      url: string;
    };
  }>;
  "circle-marker": ComponentLike<{
    Args: {
      lat: number;
      lng: number;
      title?: string;
    };
    Blocks: {
      default: [
        marker: {
          tooltip: ComponentLike<{
            Blocks: {
              default: [];
            };
          }>;
          popup: ComponentLike<{
            Blocks: {
              default: [];
            };
          }>;
        }
      ];
    };
  }>;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'markdown-to-html': typeof MarkdownToHtml;
    LeafletMap: ComponentLike<{
      Element: HTMLDivElement;
      Args: {
        lat: number;
        lng: number;
        zoom: number;
      };
      Blocks: {
        default: [layers: EmberLeafletLayers];
      };
    }>;
  }
}
