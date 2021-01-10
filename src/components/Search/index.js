import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WIKIPEDIA_BASE_API_URL } from '../../constants/config'

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(WIKIPEDIA_BASE_API_URL, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search)
        };
        if (term) search();
    }, [term]);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;