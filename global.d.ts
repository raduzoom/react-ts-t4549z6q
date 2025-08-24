import { DzsChipSelectorWrapper } from 'chip-selector';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dzs-chip-selector': React.DetailedHTMLProps<React.HTMLAttributes<DzsChipSelectorWrapper> & {
        'data-persistentOptions'?: string;
        'data-view-skin'?: string;
        'data-view-is-wrapping'?: string;
        ref?: React.RefObject<DzsChipSelectorWrapper>;
      }, DzsChipSelectorWrapper>;
    }
  }

  interface HTMLElementTagNameMap {
    'dzs-chip-selector': DzsChipSelectorWrapper;
  }
}
