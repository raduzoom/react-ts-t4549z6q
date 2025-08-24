import * as React from 'react';
import { ChipSelectorItem, DzsChipSelectorWrapper } from 'chip-selector';

export const addStyle = (url: string, $myRef: DzsChipSelectorWrapper) => {
  const style = document.createElement('link');
  style.href = url;
  style.rel = 'stylesheet';
  (style as any).async = true;

  // document.head.appendChild(style);
  $myRef.wrapper.appendChild(style);
};

export const onUpdate = (setCurrentOptions: React.Dispatch<React.SetStateAction<ChipSelectorItem[]>>) => {
  return async (allOptions: ChipSelectorItem[]) => {
    console.log('all the options - - ', allOptions);
    const selectedOptions = allOptions.filter(
      (el) => el.currentStatus === 'checked'
    );
    console.log({ selectedOptions });
    setCurrentOptions(selectedOptions);
  };
};
