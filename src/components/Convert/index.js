import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../constants/config';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(config.GOOGLE_TRANSLATE_API, {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: config.GOOGLE_TRANSLATE_API_KEY
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, text])
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;