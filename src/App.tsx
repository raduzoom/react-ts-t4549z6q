import './style.css';
import { useRef, useEffect, useState } from 'react';
import { dzsChipSelectorWebComponent_init } from 'chip-selector/dist/dzsChipSelectorWebComponents';
import { DzsChipSelector, DzsChipSelectorWrapper, ChipSelectorItem } from 'chip-selector';
import { addStyle, onUpdate } from './helper';

dzsChipSelectorWebComponent_init();
export default function App() {
    let chipSelectorOptions = JSON.parse(
        '[{"htmlContent":"Apple ","value":"apple","currentStatus":"unchecked"},{"htmlContent":"Orange ","value":"orange","currentStatus":"checked"},{"htmlContent":"<span>Apricot</span> ","value":"apricot","currentStatus":"unchecked"}]'
    );

    const [currentOptions, setCurrentOptions] = useState(chipSelectorOptions);
    const elementRef = useRef<DzsChipSelectorWrapper>(null);

    useEffect(() => {
        console.log('[] curr options - ', currentOptions);
    }, [currentOptions]);
    useEffect(() => {
        const dzsChipSelectorWrapper: DzsChipSelectorWrapper | null = elementRef.current;
        console.log(
            'try, - ',
            dzsChipSelectorWrapper,
            'window.updateStyle - ',
            (window as any).updateStyle
        );
        console.log('dzsChipSelectorWrapper - ', dzsChipSelectorWrapper);
        console.log('dzsChipSelectorWrapper - ', dzsChipSelectorWrapper?.webComponent);
        if (dzsChipSelectorWrapper && dzsChipSelectorWrapper) {
            const dzsChipSelector: DzsChipSelector = dzsChipSelectorWrapper as unknown as DzsChipSelector;
            dzsChipSelector.assignOnUpdateFunction = onUpdate(setCurrentOptions);
            addStyle(
                'https://unpkg.com/chip-selector/dist/style/skins/skin-default.css',
                dzsChipSelectorWrapper
            );
        }
        (window as any).updateStyle();
    }, []);
    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>This is React bootstrapped web component chip-selector</p>
            <h6>options rendered from React: </h6>
            <em>
                {currentOptions.map((option: ChipSelectorItem) => {
                    if (option.currentStatus === 'checked') {
                        return `${option.value} `;
                    }
                    return null;
                })}
            </em>
            <dzs-chip-selector
                ref={elementRef}
                data-persistentOptions={JSON.stringify(chipSelectorOptions)}
            ></dzs-chip-selector>
        </div>
    );
}
