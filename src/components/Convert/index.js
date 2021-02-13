import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../constants/config';

const Convert = ({ language, text }) => {
    useEffect(() => {
        axios.post(config.GOOGLE_TRANSLATE_API, {}, {
            params: {
                q: text,
                target: language.value,
                key: config.GOOGLE_TRANSLATE_API_KEY
            }
        });
    }, [language, text])
    return <div />;
};

export default Convert;