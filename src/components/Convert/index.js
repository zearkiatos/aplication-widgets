import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../constants/config';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, config.TIMEOUT_FOR_SEARCH);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(config.GOOGLE_TRANSLATE_API, {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: config.GOOGLE_TRANSLATE_API_KEY
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText])
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;