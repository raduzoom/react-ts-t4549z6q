import { ChipSelectorItem } from 'chip-selector';

export const addStyle = (url, $myRef) => {
  const style = document.createElement('link');
  style.href = url;
  style.rel = 'stylesheet';
  style.async = true;

  // document.head.appendChild(style);
  $myRef.wrapper.appendChild(style);
};

export const onUpdate = (setCurrentOptions) => {
  return async (allOptions: ChipSelectorItem[]) => {
    console.log('all the options - - ', allOptions);
    const selectedOptions = allOptions.filter(
      (el) => el.currentStatus === 'checked'
    );
    console.log({ selectedOptions });
    setCurrentOptions(selectedOptions);
  };
};
