import { DzsChipSelectorWrapper } from 'chip-selector';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dzs-chip-selector': React.DetailedHTMLProps<React.HTMLAttributes<DzsChipSelectorWrapper> & {
        'data-persistentOptions'?: string;
        'data-view-skin'?: string;
        'data-view-is-wrapping'?: string;
      }, DzsChipSelectorWrapper>;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dzs-chip-selector': DzsChipSelectorWrapper;
  }
}
