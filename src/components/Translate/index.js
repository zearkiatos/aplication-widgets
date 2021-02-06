import React, { useState } from 'react';
import Dropdown from '../Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'sp'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    return (
        <div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
        </div>
    );
}

export default Translate;