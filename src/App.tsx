import * as React from 'react';
import './style.css';
import { useRef, useEffect, useState } from 'react';
import { dzsChipSelectorWebComponent_init } from 'chip-selector/dist/dzsChipSelectorWebComponents';
import { DzsChipSelector } from 'chip-selector';
import { addStyle, onUpdate } from './helper';

dzsChipSelectorWebComponent_init();
export default function App() {
    let chipSelectorOptions = JSON.parse(
        '[{"htmlContent":"Apple ","value":"apple","currentStatus":"unchecked"},{"htmlContent":"Orange ","value":"orange","currentStatus":"checked"},{"htmlContent":"<span>Apricot</span> ","value":"apricot","currentStatus":"unchecked"}]'
    );

    const [currentOptions, setCurrentOptions] = useState(chipSelectorOptions);
    const elementRef = useRef(null);

    useEffect(() => {
        console.log('[] curr options - ', currentOptions);
    }, [currentOptions]);
    useEffect(() => {
        const dzsChipSelector: DzsChipSelector = elementRef.current;
        console.log(
            'try, - ',
            dzsChipSelector,
            dzsChipSelector.assignOnUpdateFunction,
            'window.updateStyle - ',
            (window as any).updateStyle
        );
        if (dzsChipSelector) {
            dzsChipSelector.assignOnUpdateFunction = onUpdate(setCurrentOptions);
            addStyle(
                'https://unpkg.com/chip-selector/dist/style/skins/skin-default.css',
                dzsChipSelector
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
                {currentOptions.map((option) => {
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
